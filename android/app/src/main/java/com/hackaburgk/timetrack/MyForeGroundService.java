package com.hackaburgk.timetrack;


import android.app.ActivityManager;
import android.app.KeyguardManager;
import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.IBinder;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.widget.Toast;

import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import java.time.LocalDateTime;
import java.util.List;
import java.util.SortedMap;
import java.util.Timer;
import java.util.TimerTask;
import java.util.TreeMap;


public class MyForeGroundService extends Service {
    public static final String ACTION_START_FOREGROUND_SERVICE = "ACTION_START_FOREGROUND_SERVICE";
    private static final String TAG_FOREGROUND_SERVICE = "FOREGROUND_SERVICE";
    private final String USER_ID = "markusmoe";
    private final String DEVICE_ID = "android1";
    private final String OS_NAME = "android";
    Timer timer = new Timer();
    long lastId = 0;
    private String requestId;
    private String recentAppName;
    private LocalDateTime startTime = null;
    private LocalDateTime endTime = null;
    private boolean newSession = true;

    public MyForeGroundService() {
    }

    public static String getTopAppName(Context ctx) {
        String appName = "";

        try {
            String topPackageName = "";
            UsageStatsManager usage = (UsageStatsManager) ctx.getSystemService(Context.USAGE_STATS_SERVICE);
            long time = System.currentTimeMillis();
            List<UsageStats> stats = usage.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, time - 1000 * 1000, time);
            if (stats != null) {
                SortedMap<Long, UsageStats> runningTask = new TreeMap<>();
                for (UsageStats usageStats : stats) {
                    runningTask.put(usageStats.getLastTimeUsed(), usageStats);
                }

                topPackageName = runningTask.get(runningTask.lastKey()).getPackageName();
            }
            System.out.println(topPackageName);


            PackageManager packageManager = ctx.getPackageManager();

            appName = (String) packageManager.getApplicationLabel(packageManager.getApplicationInfo(topPackageName, PackageManager.GET_META_DATA));

            System.out.println(appName);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return appName;
    }


    public static boolean isForeground(Context ctx, String myPackage) {
        ActivityManager manager = (ActivityManager) ctx.getSystemService(ACTIVITY_SERVICE);
        List<ActivityManager.RunningTaskInfo> runningTaskInfo = manager.getRunningTasks(1);

        ComponentName componentInfo = runningTaskInfo.get(0).topActivity;
        if (componentInfo.getPackageName().equals(myPackage)) {
            return true;
        }
        return false;
    }

    private void triggerPost(LocalDateTime startTime, LocalDateTime endTime, String exename) {
        boolean idSetBefore = false;
        DbPojo dbPojo = new DbPojo();
        if (endTime != null && requestId != null) {
            dbPojo.id = requestId;
            requestId = null;
            idSetBefore = true;
        }
        if (startTime != null) {
            dbPojo.starttime = startTime.toString();
        }
        if (endTime != null) {
            dbPojo.endtime = endTime.toString();
        }
        dbPojo.exename = exename;
        dbPojo.windowtitle = null;
        Gson gson = new Gson();
        String jsonString = gson.toJson(dbPojo);
        System.out.println(jsonString);
        JSONObject resp = DbConnector.postToDb("http://172.16.29.101:8081/activity", jsonString);
        System.out.println("response " + resp.toString());
        if (endTime == null) {
            try {

                requestId = resp.get("id").toString();
            } catch (JSONException e) {
                e.printStackTrace();
            }

            System.out.println("requestId " + requestId);
        }

    }


    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG_FOREGROUND_SERVICE, "My foreground service onCreate().");
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Toast.makeText(getApplicationContext(), "Foreground service is started.", Toast.LENGTH_LONG).show();
        startForegroundService();

        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                updateTask();
            }
        }, 10000, 10000);

        return START_STICKY;

    }

    private void updateTask() {
        // newSession
        KeyguardManager kgMgr = (KeyguardManager) getApplicationContext().getSystemService(Context.KEYGUARD_SERVICE);
        boolean locked = kgMgr.inKeyguardRestrictedInputMode();
        String currentAppName = getTopAppName(getApplicationContext());

        // For first startup
        if (newSession && !locked) {
            newSession = false;
            recentAppName = currentAppName;
            startTime = LocalDateTime.now();
            triggerPost(startTime, null, recentAppName);
        } else if (!locked && !currentAppName.equals(recentAppName)) {
            endTime = LocalDateTime.now();
            triggerPost(startTime, endTime, recentAppName);
            recentAppName = currentAppName;
            startTime = endTime;
            endTime = null;
            triggerPost(startTime, null, recentAppName);
        } else if (locked && !newSession) {
            endTime = LocalDateTime.now();
            triggerPost(startTime, endTime, recentAppName);
            startTime = null;
            newSession = true;
            endTime = null;

            recentAppName = null;
        }
    }

    /* Used to build and start foreground service. */
    private void startForegroundService() {
        Log.d(TAG_FOREGROUND_SERVICE, "Start foreground service.");

        // Create notification default intent.
        Intent intent = new Intent();
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);

        // Create notification builder.
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "trackieChannel");

        // Make notification show big text.
        NotificationCompat.BigTextStyle bigTextStyle = new NotificationCompat.BigTextStyle();
        bigTextStyle.setBigContentTitle("Time tracking service by an awesome Hackaburg team!");
        bigTextStyle.bigText("This is the notification for our awesome time tracking software tracky!");
        // Set big text style.
        builder.setStyle(bigTextStyle);

        builder.setWhen(System.currentTimeMillis());
        builder.setSmallIcon(R.mipmap.ic_launcher);

        // Make head-up notification.
        builder.setFullScreenIntent(pendingIntent, true);

        /* Add Play button intent in notification.
        Intent playIntent = new Intent(this, MyForeGroundService.class);
        playIntent.setAction(ACTION_PLAY);
        PendingIntent pendingPlayIntent = PendingIntent.getService(this, 0, playIntent, 0);
        NotificationCompat.Action playAction = new NotificationCompat.Action(android.R.drawable.ic_media_play, "Play", pendingPlayIntent);
        builder.addAction(playAction);
        */

        // Build the notification.
        Notification notification = builder.build();

        // Start foreground service.
        startForeground(1, notification);
    }

    private void stopForegroundService() {
        Log.d(TAG_FOREGROUND_SERVICE, "Stop foreground service.");

        // Stop foreground service and remove the notification.
        stopForeground(true);

        // Stop the foreground service.
        stopSelf();
    }
}

package com.hackaburgk.timetrack

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.support.annotation.Nullable
import android.content.ComponentName
import android.app.ActivityManager
import android.app.usage.UsageStats
import android.app.usage.UsageStatsManager
import android.content.Context
import android.os.Binder
import android.support.design.widget.Snackbar
import android.util.Log
import java.util.*
import android.app.PendingIntent
import android.support.v4.app.NotificationCompat


class BackgroundTrackingService : Service() {

    @Nullable
    override fun onBind(intent: Intent): IBinder? {

        return null
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        System.out.println("oonstartcommand runs")
        return START_STICKY

        /*  var topPackageName: String? = null

        val usage = this.getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
        val time = System.currentTimeMillis()
        val stats = usage.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, time - 1000 * 1000, time)
        if (stats != null) {
            val runningTask = TreeMap<Long, UsageStats>()
            for (usageStats in stats) {
                runningTask[usageStats.lastTimeUsed] = usageStats
            }
            if (runningTask.isEmpty()) {
                topPackageName = "None"
            }
            topPackageName = runningTask[runningTask.lastKey()]!!.packageName

        }
        Log.e("Task List", "Current App in foreground is: " + topPackageName!!)

        return super.onStartCommand(intent, flags, startId)
        */
    }

    override fun onCreate() {
        super.onCreate()
        val pIntent = PendingIntent.getActivity(this, 0,
                Intent(this, MainActivity::class.java), 0)
        val notification = NotificationCompat.Builder(this, "trackieChannel")
                .setContentTitle("My App")
                .setContentText("Doing some work...")
                .setContentIntent(pIntent).build()
        startForeground(1000, notification)
    }
}
package com.hackaburgk.timetrack

import android.app.*
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.design.widget.Snackbar
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.os.Process
import android.provider.Settings
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*
import android.app.usage.UsageStatsManager
import android.os.Parcel


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        //Utils.checkForPermission()
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val context = this.applicationContext
        // Create the NotificationChannel
        val name = "trackieChannel"
        val descriptionText = "Awesome description for trackie channel"
        val importance = NotificationManager.IMPORTANCE_DEFAULT
        val mChannel = NotificationChannel(name, name, importance)
        mChannel.description = descriptionText
        // Register the channel with the system; you can't change the importance
        // or other notification behaviors after this
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.createNotificationChannel(mChannel)




        btn_go.setOnClickListener { view ->
            val permissionGiven = checkForPermission(context)
            if (!permissionGiven) {
                startActivity(Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS))
            } else {
                Snackbar.make(view, "Permission given GREAT!", Snackbar.LENGTH_LONG)
                        .setAction("", null).show()
            }
            val intent = Intent(this@MainActivity, MyForeGroundService::class.java)
            intent.action = MyForeGroundService.ACTION_START_FOREGROUND_SERVICE
            startService(intent)
        }
    }




    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        return when (item.itemId) {
            R.id.action_settings -> true
            else -> super.onOptionsItemSelected(item)
        }
    }

    fun checkForPermission(context: Context): Boolean {
        val appOps = context.getSystemService(Context.APP_OPS_SERVICE) as AppOpsManager
        val mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), context.packageName)
        return mode == AppOpsManager.MODE_ALLOWED
    }

}

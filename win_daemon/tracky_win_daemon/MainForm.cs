using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace TrackWinDaemon {
    public partial class MainForm : Form {
        private Rest.Rest rest;
        private WindowTracker windowTracker;

        public MainForm() {
            InitializeComponent();
            rest = new Rest.Rest();
            windowTracker = new WindowTracker();
            windowTracker.OnNewTrackedWindow += (sender, args) => {
                Console.Out.WriteLine("# Tracked: {0}", args.trackedWindow.ToString());
                rest.send(args.trackedWindow);
            };
            if (listen.Checked) {
                windowTracker.StartListening();
            }
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e) {
            if (listen.Checked) {
                windowTracker.StartListening();
            } else {
                windowTracker.StopListening();
            }
        }
    }
}
using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace TrackWinDaemon {
    public partial class MainForm : Form {
        private WindowTracker windowTracker;

        public MainForm() {
            InitializeComponent();
            windowTracker = new WindowTracker();
            windowTracker.OnNewTrackedWindow += (sender, args) => {
                Console.Out.WriteLine("# Tracked: {0}", args.trackedWindow.ToString());
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
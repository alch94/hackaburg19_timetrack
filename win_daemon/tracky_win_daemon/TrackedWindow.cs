using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms.VisualStyles;

namespace TrackWinDaemon {
    public sealed class TrackedWindow {
        private static readonly DateTime _1970 = new DateTime(1970, 1, 1);

        private TrackedWindow(string appName, string windowTitle) {
            AppName = appName;
            WindowTitle = windowTitle;
            StartTime = (long) DateTime.UtcNow.Subtract(_1970).TotalMilliseconds;
        }

        public string AppName { get; set; }
        public string WindowTitle { get; set; }
        public long StartTime { get; set; }
//        public object AdditionalInformation { get; set; }


        public DateTime StartTimeAsDate() {
            return _1970.Add(TimeSpan.FromMilliseconds(StartTime)).ToLocalTime();
        }

        public override string ToString() {
            return $"{nameof(AppName)}: {AppName}, {nameof(WindowTitle)}: {WindowTitle}, {nameof(StartTime)}: {StartTimeAsDate()}";
        }

        public static TrackedWindow From(Process p, string windowTitle) {
            string processName = p.ProcessName;
//            if (processName == "chrome") {
//                return null;
//            }
//
//            if (processName == "firefox") {
//                return null;
//            }
//
//            if (processName == "explorer") {
//                return null;
//            }

            if (processName == "Idle") {
                return null;
            }
//            return null;
//            string applicationName;
//            try {
//                applicationName = p.ProcessName;
//                windowTitle = p.MainWindowTitle;
//            }
//            catch (Exception ex) {
//                Console.WriteLine(ex.ToString());
//                applicationName = p.ProcessName;
//                windowTitle = p.MainWindowTitle;
//            }

            return new TrackedWindow(processName, windowTitle);
        }

    }
}
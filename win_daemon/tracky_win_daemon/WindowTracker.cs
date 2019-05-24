using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;

namespace TrackWinDaemon {
    internal class WindowTracker : IDisposable {
        private const uint WINEVENT_OUTOFCONTEXT = 0u;
        private const uint EVENT_SYSTEM_FOREGROUND = 3u;
        private const uint EVENT_SYSTEM_MINIMIZEEND = 23u;

        public event EventHandler<TrackedWindowEventArgs> OnNewTrackedWindow;

        [DllImport("user32.dll", SetLastError = true)]
        internal static extern IntPtr SetWinEventHook(uint eventMin, uint eventMax,
            IntPtr hmodWinEventProc, WinEventProc lpfnWinEventProc,
            int idProcess, int idThread, uint dwflags);

        [DllImport("user32.dll")]
        internal static extern int UnhookWinEvent(IntPtr hWinEventHook);

        [DllImport("user32.dll")]
        internal static extern IntPtr GetForegroundWindow();

        [DllImport("user32.dll")]
        internal static extern IntPtr GetWindowThreadProcessId(IntPtr hWnd, out uint processId);

        [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
        static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

        [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
        static extern int GetWindowTextLength(IntPtr hWnd);

        private static string GetCaptionOf(IntPtr handle) {
            string strTitle = string.Empty;
            // Obtain the length of the text
            int intLength = GetWindowTextLength(handle) + 1;
            StringBuilder stringBuilder = new StringBuilder(intLength);
            if (GetWindowText(handle, stringBuilder, intLength) > 0) {
                strTitle = stringBuilder.ToString();
            }

            return strTitle;
        }

        public void StartListening() {
            _listener = new WinEventProc(EventCallback);
            _winHook = SetWinEventHook(EVENT_SYSTEM_FOREGROUND,
                EVENT_SYSTEM_MINIMIZEEND, IntPtr.Zero,
                _listener, 0, 0, WINEVENT_OUTOFCONTEXT);
            Console.WriteLine("--- Tracking Started!");
        }

        public void StopListening() {
            UnhookWinEvent(_winHook);
            Console.WriteLine("--- Tracking Stopped!");
        }

        private void EventCallback(IntPtr hWinEventHook, uint iEvent, IntPtr hWnd, int idObject,
            int idChild, int dwEventThread, int dwmsEventTime) {
            if (iEvent == EVENT_SYSTEM_FOREGROUND || iEvent == EVENT_SYSTEM_MINIMIZEEND) {
                uint pid;
                GetWindowThreadProcessId(GetForegroundWindow(),
                    out pid);
                TrackedWindow trackedWindow = TrackedWindow.From(
                    Process.GetProcessById((int) pid), GetCaptionOf(hWnd));
                if (trackedWindow != null) {
                    var onNewActivity = OnNewTrackedWindow;
                    if (onNewActivity == null) {
                        return;
                    }

                    onNewActivity(this, new TrackedWindowEventArgs(trackedWindow));
                }
            }
        }

        public void Dispose() {
            StopListening();
        }

        private IntPtr _winHook;
        private WinEventProc _listener;

        internal delegate void WinEventProc(IntPtr hWinEventHook, uint iEvent, IntPtr hWnd,
            int idObject, int idChild, int dwEventThread, int dwmsEventTime);
    }

    internal class TrackedWindowEventArgs : EventArgs {
        public readonly TrackedWindow trackedWindow;

        public TrackedWindowEventArgs(TrackedWindow trackedWindow) {
            this.trackedWindow = trackedWindow;
        }
    }
}
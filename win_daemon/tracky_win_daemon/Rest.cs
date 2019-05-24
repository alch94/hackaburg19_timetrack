using System;
using System.Collections.Generic;
using System.Configuration;
using RestSharp;
using RestSharp.Authenticators;
using RestSharp.Serialization.Json;

namespace TrackWinDaemon.Rest {
    public class Rest {

        private RestClient client;
        private string lastId;
        private TrackedWindow lastWindow;
        private string userid;
        private string deviceid;

        public Rest() {
            client = new RestClient(ConfigurationManager.AppSettings.Get("rest"));
            userid = ConfigurationManager.AppSettings.Get("userid");
            deviceid = ConfigurationManager.AppSettings.Get("deviceid");
//            client.Authenticator = new HttpBasicAuthenticator("admin", "admin");
        }

        public void send(TrackedWindow window) {
            if (lastWindow != null) {
                var update = new RestRequest("updateactivity/0", Method.PUT);
                fillRequest(lastWindow, update, window.StartTime, lastId);
                var updateResponse = client.Execute(update);
                if (!updateResponse.IsSuccessful) {
                    Console.WriteLine("UpdateError: " + updateResponse.Content);
                }
            }
            var request = new RestRequest("activity", Method.POST);
            fillRequest(window, request, null, null);
            var restResponse = client.Execute(request);
            if (restResponse.IsSuccessful) {
                var responseJson = SimpleJson.DeserializeObject(restResponse.Content) as IDictionary<string,object>;
                if (responseJson != null) {
                    lastId = "" + responseJson["id"];
                    lastWindow = window;
                }
            }
            else {
                Console.WriteLine("ERROR!!");
            }
        }

        private void fillRequest(TrackedWindow window, RestRequest request,
            DateTime? endtime, string id) {
            request.RequestFormat = DataFormat.Json;
            var o = new {
                id = id,
                userid = userid,
                deviceid = deviceid,
                ostype = "WINDOWS",
                starttime = window.StartTime,
                endtime = endtime,
                exename = window.AppName,
                windowtitle = window.WindowTitle
            };
            Console.WriteLine("Sending: " + o);
            request.AddJsonBody(o);
        }

        public static void test() {
            RestClient c = new RestClient("https://jsonplaceholder.typicode.com");
            var request = new RestRequest("todos/1", Method.GET);
            var response = c.Execute(request);
            Console.WriteLine(response.Content);
        }
    }
}
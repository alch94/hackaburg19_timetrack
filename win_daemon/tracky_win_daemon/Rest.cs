using System;
using RestSharp;
using RestSharp.Authenticators;

namespace TrackWinDaemon.Rest {
    public class Rest {

        private RestClient client;

        public Rest(string url) {
            client = new RestClient(url);
//            client.Authenticator = new HttpBasicAuthenticator("admin", "admin");
        }

        public void send(TrackedWindow window) {
            var request = new RestRequest("track", Method.POST);
            request.AddParameter("exeName", window.AppName);

            client.Execute(request);
        }

        public static void test() {
            RestClient c = new RestClient("https://jsonplaceholder.typicode.com");
            var request = new RestRequest("todos/1", Method.GET);
            var response = c.Execute(request);
            Console.WriteLine(response.Content);
        }
    }
}
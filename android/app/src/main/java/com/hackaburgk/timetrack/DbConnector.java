package com.hackaburgk.timetrack;

import org.json.JSONObject;


import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.RequestBody;

public class DbConnector {
    public static JSONObject postToDb(String url, String json) {
        JSONObject jsonObjectResp = null;

        try {

            MediaType JSON = MediaType.parse("application/json; charset=utf-8");
            OkHttpClient client = new OkHttpClient();

            okhttp3.RequestBody body = RequestBody.create(JSON, json    );
            okhttp3.Request request = new okhttp3.Request.Builder()
                    .url(url)
                    .post(body)
                    .build();

            okhttp3.Response response = client.newCall(request).execute();

            String networkResp = response.body().string();
            if (!networkResp.isEmpty()) {

                System.out.println(networkResp);
                jsonObjectResp = parseJSONStringToJSONObject(networkResp);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            String err = String.format("{\"result\":\"false\",\"error\":\"%s\"}", ex.getMessage());
            jsonObjectResp = parseJSONStringToJSONObject(err);
        }

        return jsonObjectResp;
    }
    private static JSONObject parseJSONStringToJSONObject(final String strr) {

        JSONObject response = null;
        try {
            response = new JSONObject(strr);
        } catch (Exception ex) {
            //  Log.e("Could not parse malformed JSON: \"" + json + "\"");
            try {
                response = new JSONObject();
                response.put("result", "failed");
                response.put("data", strr);
                response.put("error", ex.getMessage());
            } catch (Exception exx) {
                exx.printStackTrace();
            }
        }
        return response;
    }

}


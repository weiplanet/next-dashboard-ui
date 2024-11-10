using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace HubSpotApi
{
    public class HubSpotApi
    {
        private readonly string _apiKey;
        private readonly string _hubId;

        public HubSpotApi(string apiKey, string hubId)
        {
            _apiKey = apiKey;
            _hubId = hubId;
        }

        public async Task UpdateHubDbRecord(int tableId, int recordId, object data)
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);

            var url = $"https://api.hubapi.com/hubdb/api/v2/tables/{tableId}/records/{recordId}";
            var json = JsonConvert.SerializeObject(data);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await client.PutAsync(url, content);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Failed to update HubDB record: {response.StatusCode}");
            }
        }
    }
}

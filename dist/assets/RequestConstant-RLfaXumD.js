const e=`builder.Services.UseRequest();
builder.Services.ConfigureRequest(
    options =>
    {
        options.BaseUri = "https://api.example.com";
        options.AppName = "MiApp";
    }
);`,t=`{
    HttpClients": {
		"ParqAccessApi": {
			"BaseUrl": "http://localhost:5000/api/",
			"UserAgent": "ParQAccess/1.0",
			"ContentType": "application/json"
		}
	},
}

builder.Services.AddHttpClients(configuration);
builder.Services.ConfigureFactory();`,n=`builder.Services.AddHttpClients(configuration);
builder.Services.ConfigureFactory();`,r=`public interface IHttpFactory
{
    Task<HttpResponse<TResult>> GetAsync<TResult>(string clientName, string url);

    Task<HttpResponse<Stream>> GetStreamAsync(string clientName, string url);

    Task<HttpResponse<byte[]>> GetBytesAsync(string clientName, string url);

    Task<HttpResponse<TResult>> PostAsync<TResult, TRequest>(string clientName, string url, TRequest request);

    Task<HttpResponse<TResult>> PutAsync<TResult, TRequest>(string clientName, string url, TRequest request);

    Task<HttpResponse<TResult>> DeleteAsync<TResult>(string clientName, string url);
}`,i=`public interface IFactoryTokenProvider
{
    string GetToken();

    string GetApiKey();

    string GetHeaderApiKey();

    void SetToken(string token);

    void SetApiKey(string apiKey);

    void SetHeaderApiKey(string apyKey);
}`,a=`public interface IRequestService
{
    Task<HttpResponseMessage?> DeleteAsync<TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    Task<HttpResponseMessage?> GetAsync<TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    Task<HttpResponseMessage?> PostAsync<TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    Task<HttpResponseMessage?> PutAsync<TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    void SetOptions(HttpOption httpOption);
}`,o=`public interface IHttpService
{
    Task<HttpResponse<TResult>> DeleteAsync<TResult, TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    Task<HttpResponse<TResult>> DeleteAsync<TResult>(
        string url, RequestOptions? options = null
    );

    Task<HttpResponse<TResult>> GetAsync<TResult>(
        string url, RequestOptions? options = null
    );

    Task<HttpResponse<TResult>> PostAsync<TResult, TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    Task<HttpResponse<TResult>> PutAsync<TResult, TRequest>(
        TRequest request, string url, RequestOptions? options = null
    );

    void SetOptions(HttpOption httpOption);
}`;export{r as a,i,t as n,o,n as r,a as s,e as t};
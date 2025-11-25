export const REQUEST_CUSTOM_CONFIGURATION = `builder.Services.UseRequest();
builder.Services.ConfigureRequest(
    options =>
    {
        options.BaseUri = "https://api.example.com";
        options.AppName = "MiApp";
    }
);`;

export const REQUEST_CUSTOM_FACTORY_CONFIGURATION_JSON = `{
    HttpClients": {
		"ParqAccessApi": {
			"BaseUrl": "http://localhost:5000/api/",
			"UserAgent": "ParQAccess/1.0",
			"ContentType": "application/json"
		}
	},
}`;

export const REQUEST_CUSTOM_FACTORY_CONFIGURATION_PROGRAM = `builder.Services.AddHttpClients(configuration);
builder.Services.ConfigureFactory();`;

export const REQUEST_IHTTPFACTORY_DEFINITIONS = `public interface IHttpFactory
{
    Task<HttpResponse<TResult>> GetAsync<TResult>(string clientName, string url);

    Task<HttpResponse<Stream>> GetStreamAsync(string clientName, string url);

    Task<HttpResponse<byte[]>> GetBytesAsync(string clientName, string url);

    Task<HttpResponse<TResult>> PostAsync<TResult, TRequest>(string clientName, string url, TRequest request);

    Task<HttpResponse<TResult>> PutAsync<TResult, TRequest>(string clientName, string url, TRequest request);

    Task<HttpResponse<TResult>> DeleteAsync<TResult>(string clientName, string url);
}`;

export const REQUEST_IFACTORY_TOKEN_PROVIDER_DEFINITIONS = `public interface IFactoryTokenProvider
{
    string GetToken();

    string GetApiKey();

    string GetHeaderApiKey();

    void SetToken(string token);

    void SetApiKey(string apiKey);

    void SetHeaderApiKey(string apyKey);
}`;

export const REQUEST_IREQUEST_DEFINITIONS = `public interface IRequestService
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
}`;

export const REQUEST_IHTTP_DEFINITIONS = `public interface IHttpService
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
}`;
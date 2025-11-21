import CodeExpample from "../../components/CodeExample";

export default function EssentialLayersRequest() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-semibold">EssentialLayers.Request</h2>

            <p>Wrapper sobre HttpClient con tres modos de uso: <b>IHttpService</b>, <b>IHttpRequest</b> e <b>IHttpFactory</b>.</p>

            <CodeExpample title="Registro"
                code={`builder.Services.UseRequest();
builder.Services.ConfigureRequest(
    options =>
    {
        options.BaseUri = "https://api.example.com";
        options.AppName = "MiApp";
    }
);`} />

            <CodeExpample title="Ejemplo (IHttpService)"
                code={`// inyección
private readonly IHttpService _httpService;

var response = await _httpService.GetAsync<MyDto>("endpoint/path");`} />

            <CodeExpample title="IHttpFactory (cambio runtime)"
                code={`// Obtener cliente configurado
var client = await _httpFactory.Use("GitHubClient");
var r = await client.GetAsync("repos/..");`} />
        </div>
    );
}
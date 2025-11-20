export default function EssentialLayersRequest() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">EssentialLayers.Request</h2>

            <p>Wrapper sobre HttpClient con tres modos de uso: <b>IHttpService</b>, <b>IHttpRequest</b> e <b>IHttpFactory</b>.</p>

            <section>
                <h3 className="text-xl font-medium">Registro</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded">
                    {
                        `builder.Services.UseRequest();
builder.Services.ConfigureRequest(
    options =>
    {
        options.BaseUri = "https://api.example.com";
        options.AppName = "MiApp";
    }
);`
                    }
                </pre>
            </section>

            <section>
                <h3 className="text-xl font-medium">Ejemplo (IHttpService)</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded">
                    {
                        `// inyección
private readonly IHttpService _httpService;

var response = await _httpService.GetAsync<MyDto>("endpoint/path");`
                    }
                </pre>
            </section>

            <section>
                <h3 className="text-xl font-medium">IHttpFactory (cambio runtime)</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded">
                    {
                        `// Obtener cliente configurado
var client = await _httpFactory.Use("GitHubClient");
var r = await client.GetAsync("repos/..");`
                    }
                </pre>
            </section>
        </div>
    );
}
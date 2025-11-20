export default function GettingStarted() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Getting Started</h2>

            <section>
                <h3 className="text-xl font-medium">Instalación</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded mt-2">
                    {
                        `dotnet add package EssentialLayers
dotnet add package EssentialLayers.Request
dotnet add package EssentialLayers.Dapper
dotnet add package EssentialLayers.AzureBlobs`
                    }
                </pre>
            </section>

            <section>
                <h3 className="text-xl font-medium mt-4">Registro de servicios (Program.cs)</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded mt-2">
                    {
                        `// Ejemplo minimal para .NET 6/7/8
var builder = WebApplication.CreateBuilder(args);

// Registrar paquetes (ejemplo)
builder.Services.AddEssentialLayers(); // si tienes extensión global
builder.Services.UseRequest();
builder.Services.ConfigureAzureBlob(builder.Configuration.GetConnectionString("AzureBlob"));

var app = builder.Build();
app.Run();`
                    }
                </pre>
            </section>
        </div>
    );
}
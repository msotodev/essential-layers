import CodeExample from "../../components/CodeExample";

export default function GettingStarted() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h2 className="text-3xl font-semibold">Getting Started</h2>

            <CodeExample title="Instalación"
                code={`dotnet add package EssentialLayers
dotnet add package EssentialLayers.Request
dotnet add package EssentialLayers.Dapper
dotnet add package EssentialLayers.AzureBlobs`} />

            <CodeExample title="Registro de servicios (Program.cs)"
                code={`// Ejemplo minimal para .NET 6/7/8
var builder = WebApplication.CreateBuilder(args);

// Registrar paquetes (ejemplo)
builder.Services.AddEssentialLayers(); // si tienes extensión global
builder.Services.UseRequest();
builder.Services.ConfigureAzureBlob(builder.Configuration.GetConnectionString("AzureBlob"));

var app = builder.Build();
app.Run();`} />
        </div>
    );
}
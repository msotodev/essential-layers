export const GETTING_STARTED_CORE = `dotnet add package EssentialLayers`;

export const GETTING_STARTED_REQUEST = `dotnet add package EssentialLayers.Request`;

export const GETTING_STARTED_DAPPER = `dotnet add package EssentialLayers.Dapper`;

export const GETTING_STARTED_AZURE_BLOBS = `dotnet add package EssentialLayers.AzureBlobs`;

export const GETTING_STARTED_CONFIGURE_REQUEST = `builder.Services.UseRequest();`;

export const GETTING_STARTED_SERVICE_REGISTER = `// Example of configuration to Net 6, 7, 8, 9, 10
var builder = WebApplication.CreateBuilder(args);

// To use Request
builder.Services.UseRequest();

// To use AzureBlobs
app.Services.ConfigureAzureBlobs("YOUR_CONNECTION_STRING");

`;
import{o as e,t}from"./index-DE2URFug.js";import"./Icon-um-GfDu4.js";import{t as n}from"./CodeExample-CCOypUz7.js";var r=e(t());function i(){return(0,r.jsxs)(`div`,{className:`space-y-6 dark:text-white text-gray-700`,children:[(0,r.jsx)(`h2`,{className:`text-3xl font-semibold`,children:`Getting Started`}),(0,r.jsx)(n,{title:`Instalación`,code:`dotnet add package EssentialLayers
dotnet add package EssentialLayers.Request
dotnet add package EssentialLayers.Dapper
dotnet add package EssentialLayers.AzureBlobs`}),(0,r.jsx)(n,{title:`Registro de servicios (Program.cs)`,code:`// Ejemplo minimal para .NET 6/7/8
var builder = WebApplication.CreateBuilder(args);

// Registrar paquetes (ejemplo)
builder.Services.AddEssentialLayers(); // si tienes extensión global
builder.Services.UseRequest();
builder.Services.ConfigureAzureBlob(builder.Configuration.GetConnectionString("AzureBlob"));

var app = builder.Build();
app.Run();`})]})}export{i as default};
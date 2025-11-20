import{o as e,t}from"./index-DE2URFug.js";import"./Icon-um-GfDu4.js";import{t as n}from"./CodeExample-CCOypUz7.js";var r=e(t());function i(){return(0,r.jsxs)(`div`,{className:`space-y-6 dark:text-white text-gray-700`,children:[(0,r.jsx)(`h2`,{className:`text-3xl font-semibold`,children:`EssentialLayers.Request`}),(0,r.jsxs)(`p`,{children:[`Wrapper sobre HttpClient con tres modos de uso: `,(0,r.jsx)(`b`,{children:`IHttpService`}),`, `,(0,r.jsx)(`b`,{children:`IHttpRequest`}),` e `,(0,r.jsx)(`b`,{children:`IHttpFactory`}),`.`]}),(0,r.jsx)(n,{title:`Registro`,code:`builder.Services.UseRequest();
builder.Services.ConfigureRequest(
    options =>
    {
        options.BaseUri = "https://api.example.com";
        options.AppName = "MiApp";
    }
);`}),(0,r.jsx)(n,{title:`Ejemplo (IHttpService)`,code:`// inyección
private readonly IHttpService _httpService;

var response = await _httpService.GetAsync<MyDto>("endpoint/path");`}),(0,r.jsx)(n,{title:`IHttpFactory (cambio runtime)`,code:`// Obtener cliente configurado
var client = await _httpFactory.Use("GitHubClient");
var r = await client.GetAsync("repos/..");`})]})}export{i as default};
import React from "react";
import { CodeSnippet } from "../../components/CodeSnippet";

export const Request: React.FC = () => {
    const configSnippet = `builder.Services.UseRequest();
builder.Services.ConfigureRequest(options =>
{
  options.BaseUri = "https://api.misitio.com";
  options.AppName = "MiApp";
  options.InsensitiveMapping = true;
});`;

    const usageSnippet = `var result = await _httpService.GetAsync<MyResponse>("endpoint/path");`;

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">EssentialLayers.Request</h2>
            <p>
                Wrapper de HttpClient que facilita la integración HTTP en .NET con inyección
                de dependencias y distintos modos de uso.
            </p>

            <h3 className="text-2xl font-medium">Configuración</h3>
            <CodeSnippet code={configSnippet} language="csharp" />

            <h3 className="text-2xl font-medium">Modos de uso</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    **IHttpService**: trabaja directamente con tipos (`TResponse`).
                </li>
                <li>
                    **IHttpRequest**: devuelve `HttpResponseMessage` para control avanzado.
                </li>
                <li>
                    **IHttpFactory**: permite registrar múltiples clientes, cambiar en runtime y reutilizar clientes.
                </li>
            </ul>

            <h3 className="text-2xl font-medium">Ejemplo de uso</h3>
            <CodeSnippet code={usageSnippet} language="csharp" />
        </div>
    );
};
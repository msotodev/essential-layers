import React from "react";
import { CodeSnippet } from "../../components/CodeSnippet";

export const Core: React.FC = () => {
    const snippet = `public Result<User> GetUser(int id)
{
    if (id <= 0)
        return Result<User>.Fail("Id inválido");

    var user = _repository.Find(id);
    return Result<User>.Ok(user, "Usuario encontrado");
}`;

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">EssentialLayers (Core)</h2>
            <p>
                Este paquete es la base del ecosistema EssentialLayers. Contiene helpers,
                extensiones y un sistema de resultados para estandarizar la respuesta en
                toda tu aplicación.
            </p>

            <h3 className="text-2xl font-medium">Instalación</h3>
            <CodeSnippet code="dotnet add package EssentialLayers" language="bash" />

            <h3 className="text-2xl font-medium">Uso básico</h3>
            <CodeSnippet code={snippet} language="csharp" />

            <h3 className="text-2xl font-medium">Features</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Pattern de <b>Result</b> para manejar éxito / fallo / datos.</li>
                <li>Helpers reutilizables (strings, fechas, enums).</li>
                <li>Extensiones para colecciones, tareas, etc.</li>
                <li>Manejo flexible de errores y transformaciones.</li>
            </ul>
        </div>
    );
};
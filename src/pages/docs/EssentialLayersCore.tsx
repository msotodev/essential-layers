export default function EssentialLayersCore() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">EssentialLayers (Core)</h2>

            <p>
                Paquete base con helpers, extensiones y el patrón `Result` para
                estandarizar respuestas en todas las capas.
            </p>

            <section>
                <h3 className="text-xl font-medium">Result Pattern (ejemplo)</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded">
                    {
                        `public Result<User> GetUser(int id)
{
    if (id <= 0) return Result<User>.Fail("Id inválido");
    var user = _repo.Find(id);
    return Result<User>.Ok(user, "Usuario encontrado");
}`
                    }
                </pre>
            </section>

            <section>
                <h3 className="text-xl font-medium">Helpers y Extensions</h3>
                <ul className="list-disc list-inside">
                    <li>StringHelper, DateHelper, EnumHelper</li>
                    <li>Extensiones para colecciones y tareas</li>
                    <li>Métodos de serialización (`ToJsonIndented()`)</li>
                </ul>
            </section>
        </div>
    );
}
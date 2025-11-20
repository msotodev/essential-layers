import CodeExpample from "../../components/CodeExample";

export default function EssentialLayersDapper() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h2 className="text-3xl font-semibold">EssentialLayers.Dapper</h2>

            <p>
                Wrapper que une Dapper + Microsoft.Data.SqlClient para ejecutar stored
                procedures y consultas con menos boilerplate.
            </p>

            <CodeExpample title="Ejemplo de QueryAsync"
                code={`var users = await _db.QueryAsync<User>("sp_GetUsers", new { IsActive = true });`} />

            <CodeExpample title="Execute"
                code={`await _db.ExecuteAsync("sp_DeleteUser", new { Id = 10 });`} />
        </div>
    );
}
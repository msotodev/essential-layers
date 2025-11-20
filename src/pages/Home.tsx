import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold">EssentialLayers Documentation</h1>
            <p className="text-gray-700">
                Colección de paquetes para .NET: núcleo de helpers, cliente HTTP, wrapper
                para Dapper/SqlClient, integración con Azure Blobs y más. Selecciona una
                sección en la barra lateral para ver la documentación.
            </p>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link to="/docs/getting-started" className="p-4 bg-white rounded shadow hover:shadow-lg">
                    <h3 className="font-semibold">Getting Started</h3>
                    <p className="text-sm text-gray-600 mt-2">Instalación y configuración inicial</p>
                </Link>

                <Link to="/docs/essential-layers" className="p-4 bg-white rounded shadow hover:shadow-lg">
                    <h3 className="font-semibold">EssentialLayers (Core)</h3>
                    <p className="text-sm text-gray-600 mt-2">Helpers, Result pattern, extensions</p>
                </Link>

                <Link to="/docs/essential-layers-request" className="p-4 bg-white rounded shadow hover:shadow-lg">
                    <h3 className="font-semibold">EssentialLayers.Request</h3>
                    <p className="text-sm text-gray-600 mt-2">Wrapper de HttpClient con múltiples interfaces</p>
                </Link>

                <Link to="/docs/essential-layers-data" className="p-4 bg-white rounded shadow hover:shadow-lg">
                    <h3 className="font-semibold">EssentialLayers.Data</h3>
                    <p className="text-sm text-gray-600 mt-2">Wrapper Dapper + Microsoft.Data.SqlClient</p>
                </Link>

                <Link to="/docs/essential-layers-azure-blobs" className="p-4 bg-white rounded shadow hover:shadow-lg">
                    <h3 className="font-semibold">EssentialLayers.AzureBlobs</h3>
                    <p className="text-sm text-gray-600 mt-2">Integración simplificada con Azure Blob Storage</p>
                </Link>
            </div>
        </div>
    );
}
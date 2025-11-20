import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h1 className="text-4xl font-bold">EssentialLayers Documentation</h1>
            <p>
                Colección de paquetes para .NET: núcleo de helpers, cliente HTTP, wrapper
                para Dapper/SqlClient, integración con Azure Blobs y más. Selecciona una
                sección en la barra lateral para ver la documentación.
            </p>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CardLink titile="Getting Started"
                    description="Instalación y configuración inicial" />

                <CardLink titile="EssentialLayers (Core)"
                    description="Helpers, Result pattern, extensions" />

                <CardLink titile="EssentialLayers.Request"
                    description="Wrapper de HttpClient con múltiples interfaces" />

                <CardLink titile="EssentialLayers.Data"
                    description="Wrapper Dapper + Microsoft.Data.SqlClient" />

                <CardLink titile="EssentialLayers.AzureBlobs"
                    description="Integración simplificada con Azure Blob Storage" />
            </div>
        </div>
    );
}

interface CardLinkProps {
    titile: string;
    description: string;
}

function CardLink(
    { titile, description }: CardLinkProps
) {
    return (
        <Link to="/docs/essential-layers-azure-blobs" className="p-4 dark:bg-gray-900 bg-blue-100 border-[1px] border-blue-200 dark:border-gray-900 rounded shadow hover:shadow-md">
            <h3 className="font-semibold">{titile}</h3>
            <p className="text-sm mt-2">{description}</p>
        </Link>
    );
}
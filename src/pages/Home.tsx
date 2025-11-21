import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function Home() {
    const docs = "/docs/";

    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h1 className="text-2xl sm:text-3xl font-bold">EssentialLayers Documentation</h1>
            <p>
                Colección de paquetes para .NET: núcleo de helpers, cliente HTTP, wrapper
                para Dapper/SqlClient, integración con Azure Blobs y más. Selecciona una
                sección en la barra lateral para ver la documentación.
            </p>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CardLink titile="Getting Started"
                    description="Instalación y configuración inicial"
                    iconName="arrow_right_alt"
                    route={`${docs}getting-started`} />

                <CardLink titile="EssentialLayers (Core)"
                    description="Helpers, Result pattern, extensions"
                    iconName="hub"
                    route={`${docs}essential-layers`} />

                <CardLink titile="EssentialLayers.Request"
                    description="Wrapper de HttpClient con múltiples interfaces"
                    iconName="api"
                    route={`${docs}essential-layers-request`} />

                <CardLink titile="EssentialLayers.Dapper"
                    description="Wrapper Dapper + Microsoft.Data.SqlClient"
                    iconName="memory"
                    route={`${docs}essential-layers-dapper`} />

                <CardLink titile="EssentialLayers.AzureBlobs"
                    description="Integración simplificada con Azure Blob Storage"
                    iconName="arrow_upload_progress"
                    route={`${docs}essential-layers-azure-blobs`} />
            </div>
        </div>
    );
}

interface CardLinkProps {
    titile: string;
    description: string;
    iconName?: string;
    route: string;
}

function CardLink(
    { titile, description, iconName, route }: CardLinkProps
) {
    return (
        <div className={`flex ${iconName && "gap-2"} dark:bg-gray-900 bg-blue-100 border-[1px] border-blue-200 dark:border-gray-900 p-4 rounded shadow hover:shadow-md`}>
                <Icon iconName={iconName} className="text-gray-50/50" />
            <Link to={route}>
                <h3 className="font-semibold">{titile}</h3>
                <p className="text-sm mt-2">{description}</p>
            </Link>
        </div>
    );
}
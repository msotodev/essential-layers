# EssentialLayers
Creado para ser el paquete core, que tiene como propósito incluir los helpers, handlers y extensions para hacer código más descriptivo, estandarizar el manejo de resultados y reutilización de código.

## EssentialLayers.Request
Es un wrapper del paqute HttpClient para agilizar la integración de un cliente Http, actualmente cuenta con tres modos de uso, IHttpService, para uso exclusivo entre web app + api, IHttpRequest, que devuelve HttpResponseMessage para permitirte manejar la respuesta y el más reciente IHttpFactory que usa internamente la creación de un cliente para ser reutilizado, ademas de permitir el cambio en tiempo de ejecución del cliente previamente registrado en el program o en appsettings usando extensiones del mismo paquete.

## Essential Layers
Une a los paquete Dapper y Microsoft.Data.SqlClient para formar un wrapper que ayuda a la interación mucho más sencilla de la base de datos y el proyecto .Net a travez del uso de store procedures.

## EssentialLayers.AzureBlobs
Un wrapper pensado para manejar de manera estandarizada y práctica el uso de Blobs con a travez del paquete Azure.Storage.Blobs
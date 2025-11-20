import CodeExpample from "../../components/CodeExample";

export default function EssentialLayersAzureBlobs() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <h2 className="text-3xl font-semibold">EssentialLayers.AzureBlobs</h2>

            <p>Wrapper sobre Azure.Storage.Blobs para subir/descargar/listar blobs fácilmente.</p>

            <CodeExpample title="Ejemplos"
                code={`await _blobService.UploadAsync("container", "file.png", stream);
var files = await _blobService.ListAsync("container");
var stream = await _blobService.DownloadAsync("container", "file.png");`} />
        </div>
    );
}
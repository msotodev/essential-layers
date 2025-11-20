export default function EssentialLayersAzureBlobs() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-semibold">EssentialLayers.AzureBlobs</h2>

            <p>Wrapper sobre Azure.Storage.Blobs para subir/descargar/listar blobs fácilmente.</p>

            <section>
                <h3 className="text-xl font-medium">Ejemplos</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded">
                    {
                        `await _blobService.UploadAsync("container", "file.png", stream);
var files = await _blobService.ListAsync("container");
var stream = await _blobService.DownloadAsync("container", "file.png");`
                    }
                </pre>
            </section>
        </div>
    );
}
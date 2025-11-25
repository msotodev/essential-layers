export const AZURE_BLOBS_CONFIGURE = `app.Services.ConfigureAzureBlobs("YOUR_CONNECTION_STRING");`;

export const AZURE_BLOBS_SERVICE_START = `using EssentialLayers.AzureBlobs.Services.Blob;
using EssentialLayers.Helpers.Extension;
using EssentialLayers.Helpers.Result;

public class BlobService (IAzureBlobService azureBlobService)
{
	private readonly IAzureBlobService _azureBlobService = azureBlobService;
`;

export const AZURE_BLOBS_SERVICE_END = `}`;

export const AZURE_BLOBS_UPLOAD = `${AZURE_BLOBS_SERVICE_START}
    public async Task<string?> UploadExampleAsync()
    {
        ResultHelper<string> result = await _azureBlobService.UploadFileAsync(
            "example.txt", "files", "HelloWorld".GetBytes()
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
${AZURE_BLOBS_SERVICE_END}`;

export const AZURE_BLOBS_GET_URL_FILE = `${AZURE_BLOBS_SERVICE_START}
    public string? GetUrlFileExample()
    {
        ResultHelper<string> result = _azureBlobService.GetUrlFile(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
${AZURE_BLOBS_SERVICE_END}`;

export const AZURE_BLOBS_DOWNLOAD_FILE = `${AZURE_BLOBS_SERVICE_START}
    public async Task<string?> DownloadFileAsync()
    {
        ResultHelper<string> result = await _azureBlobService.DownloadFileAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
${AZURE_BLOBS_SERVICE_END}`;

export const AZURE_BLOBS_DOWNLOAD_BYTES = `${AZURE_BLOBS_SERVICE_START}
    public async Task<byte[]?> DownloadBytesAsync()
    {
        ResultHelper<byte[]> result = await _azureBlobService.DownloadBytesAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Error handling

        return result.Data; // Full bytes array
    }
${AZURE_BLOBS_SERVICE_END}`;

export const AZURE_BLOBS_DELETE = `${AZURE_BLOBS_SERVICE_START}
    public async Task<bool> DeleteFileAsync()
    {
        ResultHelper<bool> result = await _azureBlobService.DeleteFileAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return false; // Message handling (result.Message)

        return result.Data; // True or False if was deleted
    }
${AZURE_BLOBS_SERVICE_END}`;

export const AZURE_BLOBS_DEFINITIONS = `Task<ResultHelper<string>> UploadFileAsync(
    string fileName, string container, byte[] bytes
);

ResultHelper<string> GetUrlFile(
    string filepath, string container
);

Task<ResultHelper<string>> DownloadFileAsync(
    string filepath, string container
);

Task<ResultHelper<byte[]>> DownloadBytesAsync(
    string filepath, string container
);

Task<ResultHelper<bool>> DeleteFileAsync(
    string filepath, string container
);

Task<ResultHelper<HashSet<BlobItem>>> ListContainersAsync(
    string container, string prefix
);`;
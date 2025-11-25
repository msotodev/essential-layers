const e=`app.Services.ConfigureAzureBlobs("YOUR_CONNECTION_STRING");`,t=`using EssentialLayers.AzureBlobs.Services.Blob;
using EssentialLayers.Helpers.Extension;
using EssentialLayers.Helpers.Result;

public class BlobService (IAzureBlobService azureBlobService)
{
	private readonly IAzureBlobService _azureBlobService = azureBlobService;
`,n=`${t}
    public async Task<string?> UploadExampleAsync()
    {
        ResultHelper<string> result = await _azureBlobService.UploadFileAsync(
            "example.txt", "files", "HelloWorld".GetBytes()
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
}`,r=`${t}
    public string? GetUrlFileExample()
    {
        ResultHelper<string> result = _azureBlobService.GetUrlFile(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
}`,i=`${t}
    public async Task<string?> DownloadFileAsync()
    {
        ResultHelper<string> result = await _azureBlobService.DownloadFileAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Message handling (result.Message)

        return result.Data; // Full url
    }
}`,a=`${t}
    public async Task<byte[]?> DownloadBytesAsync()
    {
        ResultHelper<byte[]> result = await _azureBlobService.DownloadBytesAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return null; // Error handling

        return result.Data; // Full bytes array
    }
}`,o=`${t}
    public async Task<bool> DeleteFileAsync()
    {
        ResultHelper<bool> result = await _azureBlobService.DeleteFileAsync(
            "example.txt", "files"
        );

        if (result.Ok.False()) return false; // Message handling (result.Message)

        return result.Data; // True or False if was deleted
    }
}`,s=`Task<ResultHelper<string>> UploadFileAsync(
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
);`;export{i as a,a as i,s as n,r as o,o as r,n as s,e as t};
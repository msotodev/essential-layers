import Code from "../../components/Code";
import { Typo } from "../../components/Typo";
import { AZURE_BLOBS_DEFINITIONS, AZURE_BLOBS_DELETE, AZURE_BLOBS_DOWNLOAD_BYTES, AZURE_BLOBS_DOWNLOAD_FILE, AZURE_BLOBS_GET_URL_FILE, AZURE_BLOBS_UPLOAD } from "../../utils/AzureBlobsConstant";

export default function EssentialLayersAzureBlobs() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo type="title">EssentialLayers.AzureBlobs</Typo>

            <Typo type="paragraph">
                This interface defines a service for performing common operations on <strong>Azure Blob Storage</strong>, such as uploading, downloading, deleting, and listing blob items.
                All responses are wrapped in ResultHelper&lt;T&gt; to provide consistent error and success handling.
            </Typo>

            <Typo children="Definitions" type="subtitle" />

            <Code title="IAzureBlobService.cs" code={AZURE_BLOBS_DEFINITIONS} />

            <Typo children="Examples" type="subtitle" />

            <Typo type="heading" children="Upload" />
            <Code title="Examples.cs" code={AZURE_BLOBS_UPLOAD} />

            <Typo type="heading" children="GetUrlFile" />
            <Code title="Examples.cs" code={AZURE_BLOBS_GET_URL_FILE} />

            <Typo type="heading" children="DownloadFileAsync" />
            <Code title="Examples.cs" code={AZURE_BLOBS_DOWNLOAD_FILE} />
            
            <Typo type="heading" children="DownloadBytesAsync" />
            <Code title="Examples.cs" code={AZURE_BLOBS_DOWNLOAD_BYTES} />

            <Typo type="heading" children="DeleteFileAsync" />
            <Code title="Examples.cs" code={AZURE_BLOBS_DELETE} />
        </div>
    );
}
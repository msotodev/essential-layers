import Code from "../../components/Code";
import CodeExpample from "../../components/CodeExample";
import { Typo } from "../../components/Typo";
import { AZURE_BLOBS_DEFINITIONS, AZURE_BLOBS_UPLOAD } from "../../utils/constant";

export default function EssentialLayersAzureBlobs() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo type="title">EssentialLayers.AzureBlobs</Typo>

            <Typo type="paragraph">
                <p>
                    This interface defines a service for performing common operations on <strong>Azure Blob Storage</strong>, such as uploading, downloading, deleting, and listing blob items.
                    All responses are wrapped in ResultHelper&lt;T&gt; to provide consistent error and success handling.
                </p>
            </Typo>

            <Typo children="Definitions" type="subtitle" />

            <Code code={AZURE_BLOBS_DEFINITIONS} />

            <Typo children="Examples" type="subtitle" />

            <CodeExpample title="Upload"
                code={AZURE_BLOBS_UPLOAD} />
        </div>
    );
}
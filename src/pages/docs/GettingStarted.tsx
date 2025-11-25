import Code from "../../components/Code";
import { Typo } from "../../components/Typo";
import { AZURE_BLOBS_CONFIGURE } from "../../utils/AzureBlobsConstant";
import { DAPPER_CONFIGURE } from "../../utils/DapperConstant";
import { GETTING_STARTED_AZURE_BLOBS, GETTING_STARTED_CONFIGURE_REQUEST, GETTING_STARTED_CORE, GETTING_STARTED_DAPPER, GETTING_STARTED_REQUEST } from "../../utils/GettingStartedConstant";
import { REQUEST_CUSTOM_CONFIGURATION, REQUEST_CUSTOM_FACTORY_CONFIGURATION_JSON, REQUEST_CUSTOM_FACTORY_CONFIGURATION_PROGRAM } from "../../utils/RequestConstant";

export default function GettingStarted() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo type="title" children="Getting Started" />

            <Typo type="heading" children="Core" />
            <Code title="Program.cs" code={GETTING_STARTED_CORE} />
            <Code title="Program.cs" code={GETTING_STARTED_CONFIGURE_REQUEST} />

            <Typo type="heading" children="Azure Blobs" />
            <Code title="Program.cs" code={GETTING_STARTED_AZURE_BLOBS} />
            <Code title="Program.cs" code={AZURE_BLOBS_CONFIGURE} />

            <Typo type="heading" children="Dapper" />
            <Code title="Program.cs" code={GETTING_STARTED_DAPPER} />
            <Code title="Program.cs" code={DAPPER_CONFIGURE} />

            <Typo type="heading" children="Request" />
            <Code title="Program.cs" code={GETTING_STARTED_REQUEST} />
            <Code title="appsettings.Development.json" code={REQUEST_CUSTOM_FACTORY_CONFIGURATION_JSON} />
            <Code title="Program.cs" code={REQUEST_CUSTOM_FACTORY_CONFIGURATION_PROGRAM} />
            <Code title="Program.cs" code={REQUEST_CUSTOM_CONFIGURATION} />
        </div>
    );
}
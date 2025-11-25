import Code from "../../components/Code";
import CodeExample from "../../components/CodeExample";
import { Typo } from "../../components/Typo";
import { GETTING_STARTED_AZURE_BLOBS, GETTING_STARTED_CONFIGURE_REQUEST, GETTING_STARTED_CORE, GETTING_STARTED_DAPPER, GETTING_STARTED_REQUEST, GETTING_STARTED_SERVICE_REGISTER } from "../../utils/constant";

export default function GettingStarted() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo children="Getting Started" type="title" />

            <CodeExample title="Core"
                code={GETTING_STARTED_CORE} />

            <Code code={GETTING_STARTED_CONFIGURE_REQUEST} />

            <CodeExample title="Azure Blobs"
                code={GETTING_STARTED_AZURE_BLOBS} />

            <CodeExample title="Dapper"
                code={GETTING_STARTED_DAPPER} />

            <CodeExample title="Request"
                code={GETTING_STARTED_REQUEST} />

            <CodeExample title="Registro de servicios (Program.cs)"
                code={GETTING_STARTED_SERVICE_REGISTER} />
        </div>
    );
}
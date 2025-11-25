import Code from "../../components/Code";
import Icon from "../../components/Icon";
import { Typo } from "../../components/Typo";
import { AZURE_BLOBS_CONFIGURE } from "../../utils/AzureBlobsConstant";
import { DAPPER_CONFIGURE } from "../../utils/DapperConstant";
import { GETTING_STARTED_AZURE_BLOBS, GETTING_STARTED_CONFIGURE_REQUEST, GETTING_STARTED_CORE, GETTING_STARTED_DAPPER, GETTING_STARTED_REQUEST } from "../../utils/GettingStartedConstant";
import { REQUEST_CUSTOM_CONFIGURATION, REQUEST_CUSTOM_FACTORY_CONFIGURATION_JSON, REQUEST_CUSTOM_FACTORY_CONFIGURATION_PROGRAM } from "../../utils/RequestConstant";
import { HashLink } from 'react-router-hash-link';

export default function GettingStarted() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo type="title" children="Getting Started" />

            <p>
                This section will guide you through the basic steps to install and configure the packages from <b>NuGet</b> and set it up in your .NET projects.
                Follow this quick guide to start using the libraries right away.
            </p>

            <HashLink smooth to="#section-one">
                <div className="flex gap-2 place-content-center hover:text-blue-600 cursor-pointer my-10">
                    <Icon iconName="rocket" /> <span>Let's start</span>
                </div>
            </HashLink>

            <div id="section-one"></div>
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
import Code from "../../components/Code";
import { Typo } from "../../components/Typo";
import { REQUEST_IFACTORY_TOKEN_PROVIDER_DEFINITIONS, REQUEST_IHTTP_DEFINITIONS, REQUEST_IHTTPFACTORY_DEFINITIONS, REQUEST_IREQUEST_DEFINITIONS } from "../../utils/RequestConstant";

export default function EssentialLayersRequest() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo children="EssentialLayers.Request" type="title" />

            <p>
                The <b>IHttpFactory</b> interface defines a unified HTTP client abstraction for performing GET, POST, PUT, and DELETE requests.
                It returns strongly typed results wrapped in <strong>HttpResponse&lt;T&gt;</strong> to ensure consistent handling of metadata, status codes, and errors.
            </p>

            <Typo type="subtitle" children="Definitions" />

            <Typo type="heading" children="Factory" />
            <Code title="IHttpFactory.cs" code={REQUEST_IHTTPFACTORY_DEFINITIONS} />
            <Code title="IFactoryTokenProvider.cs" code={REQUEST_IFACTORY_TOKEN_PROVIDER_DEFINITIONS} />

            <Typo type="heading" children="Request" />
            <Code title="IRequestService.cs" code={REQUEST_IREQUEST_DEFINITIONS} />

            <Typo type="heading" children="Http" />
            <Code title="IHttpService.cs" code={REQUEST_IHTTP_DEFINITIONS} />
        </div>
    );
}
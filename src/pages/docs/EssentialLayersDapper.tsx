import Code from "../../components/Code";
import { Typo } from "../../components/Typo";
import { DAPPER_PROCEDURE_DEFINITIONS, DAPPER_QUERY_DEFINITIONS } from "../../utils/DapperConstant";

export default function EssentialLayersDapper() {
    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo children="EssentialLayers.Dapper" type="title" />

            <div className="flex flex-col gap-2">
                <p>
                    This document describes two service interfaces used for executing stored procedures and SQL queries
                    using <strong>Dapper</strong> within the EssentialLayers architecture:
                </p>
                <ul className="list-disc pl-6">
                    <li>IProcedureService</li>
                    <li>IQueryService</li>
                </ul>
                <p>
                    All results are wrapped in <strong>ResultHelper&lt;T&gt;</strong> to provide consistent error handling and success responses.
                </p>
            </div>

            <Typo type="subtitle" children="Definitions" />

            <Code title="IProcedureService.cs" code={DAPPER_PROCEDURE_DEFINITIONS} />
            <Code title="IQueryService.cs" code={DAPPER_QUERY_DEFINITIONS} />
        </div>
    );
}
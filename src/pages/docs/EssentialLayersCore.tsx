import Code from "../../components/Code";
import { Typo } from "../../components/Typo";
import TabPanel from "../../components/tabs/TabPanel";
import TabPanels from "../../components/tabs/TabPanels";
import { useState } from "react";
import TabList from "../../components/tabs/TabList";
import TabButton from "../../components/tabs/TabButton";
import { CORE_CACHE, CORE_EXTENSIONS_BOOLEAN, CORE_EXTENSIONS_BYTE_ARRAY, CORE_EXTENSIONS_CHAR_ARRAY, CORE_EXTENSIONS_DATETIME, CORE_EXTENSIONS_DECIMAL, CORE_EXTENSIONS_IDICTIONARY, CORE_EXTENSIONS_IENUMERABLE, CORE_EXTENSIONS_INT, CORE_EXTENSIONS_LONG, CORE_EXTENSIONS_OBJECT, CORE_EXTENSIONS_OPTION_MODEL, CORE_EXTENSIONS_STREAM, CORE_EXTENSIONS_STRING, CORE_EXTENSIONS_T, CORE_HANDLERS_TRY_HANDLER, CORE_LOGGER, CORE_MODELS_INT_OPTION_MODEL, CORE_MODELS_OPTION_MODEL, CORE_MODELS_T_OPTION_MODEL, CORE_RESULT_RESPONSE, CORE_RESULT_RESULT_HELPER } from "../../utils/CoreConstant";

export default function EssentialLayersCore() {
    const coreItems = ["Cache", "Extension", "Handlers", "Logger", "Models", "Result"];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className="space-y-6 dark:text-white text-gray-700">
            <Typo children="EssentialLayers (Core)" type="title" />

            <p>
                Basic package with helpers, extensions and the <strong>Result</strong> pattern to standardize responses across all layers.
            </p>

            <Typo type="subtitle" children="Definitions" />

            <TabList activeIndex={activeIndex} onActive={handleActive}>
                {coreItems.map(item =>
                    <TabButton>{item}</TabButton>
                )}
            </TabList>
            <TabPanels activeIndex={activeIndex}>
                <TabPanel>
                    <Code title="SimpleMemoryCache.cs" code={CORE_CACHE} />
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-4">
                        <Code title="BooleanExtension.cs" code={CORE_EXTENSIONS_BOOLEAN} />
                        <Code title="ByteArrayExtension.cs" code={CORE_EXTENSIONS_BYTE_ARRAY} />
                        <Code title="CharArrayExtension.cs" code={CORE_EXTENSIONS_CHAR_ARRAY} />
                        <Code title="DateTimeExtension.cs" code={CORE_EXTENSIONS_DATETIME} />
                        <Code title="DecimalExtension.cs" code={CORE_EXTENSIONS_DECIMAL} />
                        <Code title="IDictionaryExtension.cs" code={CORE_EXTENSIONS_IDICTIONARY} />
                        <Code title="IEnumerableExtension.cs" code={CORE_EXTENSIONS_IENUMERABLE} />
                        <Code title="IntExtension.cs" code={CORE_EXTENSIONS_INT} />
                        <Code title="LongExtension.cs" code={CORE_EXTENSIONS_LONG} />
                        <Code title="ObjectExtension.cs" code={CORE_EXTENSIONS_OBJECT} />
                        <Code title="OptionModelExtension.cs" code={CORE_EXTENSIONS_OPTION_MODEL} />
                        <Code title="StreamExtension.cs" code={CORE_EXTENSIONS_STREAM} />
                        <Code title="StringExtension.cs" code={CORE_EXTENSIONS_STRING} />
                        <Code title="TExtension.cs" code={CORE_EXTENSIONS_T} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-4">
                        <Code title="TryHandler.cs" code={CORE_HANDLERS_TRY_HANDLER} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-4">
                        <Code title="LoggerHelper.cs" code={CORE_LOGGER} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-4">
                        <Code title="IntOptionModel.cs" code={CORE_MODELS_INT_OPTION_MODEL} />
                        <Code title="OptionModel.cs" code={CORE_MODELS_OPTION_MODEL} />
                        <Code title="TOptionModel.cs" code={CORE_MODELS_T_OPTION_MODEL} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-4">
                        <Code title="Response.cs" code={CORE_RESULT_RESPONSE} />
                        <Code title="Response.cs" code={CORE_RESULT_RESULT_HELPER} />
                    </div>
                </TabPanel>
            </TabPanels>
        </div>
    );
}
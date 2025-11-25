import React from "react";
import type { TabPanelProps } from "./TabPanel";

export default function TabPanels(
    { children, activeIndex }: TabPanelsProps
) {
    return (
        <div>
            {React.Children.map(children, (child, index) =>
                index === activeIndex ? child : null
            )}
        </div>
    );
}

export interface TabPanelsProps {
    children: React.ReactElement<TabPanelProps>[];
    activeIndex: number;
}
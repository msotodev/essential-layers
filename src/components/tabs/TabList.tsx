import React from "react";
import type { TabButtonProps } from "./TabButton";

export default function TabList(
    { children, onActive, activeIndex }: TabListProps
) {
    return (
        <div className="flex border-b border-gray-600">
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    onClick: () => onActive(index),
                    isActive: index === activeIndex,
                })
            )}
        </div>
    );
}

export interface TabListProps {
    children: React.ReactElement<TabButtonProps>[];
    onActive: (index: number) => void;
    activeIndex: number;
}
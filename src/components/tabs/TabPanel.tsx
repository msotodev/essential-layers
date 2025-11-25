import type React from "react";

export default function TabPanel({ children }: TabPanelProps) {
    return <div>{children}</div>;
}

export interface TabPanelProps {
    children?: React.ReactNode;
}
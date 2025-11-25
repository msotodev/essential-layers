import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 min-h-[800px] overflow-y-auto">
            <Navbar />
            <div className="flex flex-1">
                <aside className="w-72 hidden md:block bg-white dark:bg-gray-800 border-r dark:border-gray-900">
                    <Sidebar />
                </aside>
                <main className="flex-1 p-6 overflow-auto">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
}
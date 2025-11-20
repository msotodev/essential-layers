import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
            <Navbar />
            <div className="flex flex-1">
                <aside className="w-72 hidden md:block border-r bg-white dark:bg-gray-800">
                    <Sidebar />
                </aside>
                <main className="flex-1 p-6 overflow-auto">
                    <div className="max-w-7xl mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
}
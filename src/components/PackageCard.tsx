import React from "react";
import { CodeSnippet } from "./CodeSnippet";

interface PackageCardProps {
    name: string;
    description: string;
    installCommand: string;
    docsPath: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ name, description, installCommand, docsPath }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-900 mb-4">{description}</p>
            <CodeSnippet code={installCommand} language="bash" />
            <a href={docsPath} className="mt-4 inline-block text-blue-600 hover:underline">
                Ver documentación
            </a>
        </div>
    );
};
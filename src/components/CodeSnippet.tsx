import React from "react";

interface CodeSnippetProps {
    code: string;
    language?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = "csharp" }) => {
    return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
        </pre>
    );
};
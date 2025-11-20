import React, { useState } from 'react';

interface HttpOption {
    baseUri: string;
    appName: string;
    appVersion: string;
    insensitiveMapping: boolean;
}

export const ServiceConfigForm: React.FC = () => {
    const [options, setOptions] = useState<HttpOption>({
        baseUri: '',
        appName: '',
        appVersion: '',
        insensitiveMapping: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setOptions(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Configuración guardada:\n${JSON.stringify(options, null, 2)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg space-y-4">
            <div>
                <label className="block text-sm font-medium">Base URI</label>
                <input
                    type="text"
                    name="baseUri"
                    value={options.baseUri}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">App Name</label>
                <input
                    type="text"
                    name="appName"
                    value={options.appName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">App Version</label>
                <input
                    type="text"
                    name="appVersion"
                    value={options.appVersion}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md"
                />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="insensitiveMapping"
                    checked={options.insensitiveMapping}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                />
                <label className="ml-2 text-sm">Insensitive Mapping</label>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Guardar configuración
            </button>
        </form>
    );
};
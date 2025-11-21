import { NavLink } from "react-router-dom";

const items = [
    { label: "Inicio", to: "/" },
    { label: "Getting Started", to: "/docs/getting-started" },
    { label: "EssentialLayers (Core)", to: "/docs/essential-layers" },
    { label: "EssentialLayers.Request", to: "/docs/essential-layers-request" },
    { label: "EssentialLayers.Dapper", to: "/docs/essential-layers-dapper" },
    { label: "EssentialLayers.AzureBlobs", to: "/docs/essential-layers-azure-blobs" },
];

export default function Sidebar() {
    return (
        <nav className="flex h-full flex-col justify-between p-4 dark:text-white text-gray-700">
            <ul className="space-y-2">
                {items.map((it) => (
                    <li key={it.to}>
                        <NavLink
                            to={it.to}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded text-sm ${isActive ? "dark:bg-gray-900 bg-blue-50 dark:text-white text-blue-700 font-medium" : "dark:text-gray-200 text-gray-700 dark:hover:bg-gray-50/5 hover:bg-gray-50"}`
                            }
                        >
                            {it.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <footer className="flex gap-2 justify-center items-center">
                <a href="https://github.com/msotodev" className="hover:underline">
                    <span className="font-semibold">@</span>
                    <span>msotodev</span>
                </a>
                <small>v1.2.0</small>
            </footer>
        </nav>
    );
}
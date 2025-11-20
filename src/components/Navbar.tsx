import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-white dark:bg-gray-800 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <img src="/favicon.png" alt="" className="w-10" />
                    
                    <Link to="/" className="text-lg font-semibold">
                        EssentialLayers Docs
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <a
                        className="text-sm text-blue-600 hover:underline"
                        href="https://github.com/msotodev/EssentialLayers"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}
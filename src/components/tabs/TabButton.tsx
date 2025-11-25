export default function TabButton(
    { children, onClick, isActive }: TabButtonProps
) {
    const activeClasses = 'border-b-2 border-blue-500 text-blue-500';
    const inactiveClasses = 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-100';

    return (
        <button
            className={`py-2 px-4 font-medium focus:outline-none ${isActive ? activeClasses : inactiveClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export interface TabButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}
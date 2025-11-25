import Icon from "../Icon";

export interface ButtonProps {
    title?: string;
    type?: ButtonType;
    iconName?: string;
    className?: string;
    colorType?: ColorType;
    children?: React.ReactNode;
    isVisible?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (file: File) => void;
}

export type ButtonType = "submit" | "reset" | "button" | "file";

export default function Button(
    {
        title,
        type = "button",
        iconName,
        className,
        colorType = "light",
        children,
        isVisible = true,
        onClick,
        onChange
    }: ButtonProps
) {
    className ??= "";
    className += " px-2 py-1 rounded-sm cursor-pointer flex items-center justify-center";
    className += iconName ? " gap-2" : "";
    className += colorType ? " " + ColorClass(colorType) : "";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange && e.target.files?.length) {
            onChange(e.target.files[0])
        }
    }

    if (!isVisible) return <></>;

    return type != "file" ? (
        <button title={title}
            type={type}
            className={className}
            onClick={handleClick}>
            <Icon className="text-[18px]" iconName={iconName} />
            {
                children &&
                <span>{children}</span>
            }
        </button>
    ) : (
        <label title={title} className={className}>
            <Icon className="text-[18px]" iconName={iconName} />
            {
                children &&
                <span>{children}</span>
            }
            <input type="file" accept=".json" className="hidden" onChange={handleChange} />
        </label>
    );
}

export function ColorClass(colorType: ColorType) {
    switch (colorType) {
        case "light": return `hover:bg-gray-100 dark:hover:bg-gray-900`;
        case "primary": return `bg-gray-900 text-white hover:bg-gray-800`;
        case "primary-outline": return `bg-transparent text-gray-900 border border-gray-900 hover:bg-blue-100`;
        default: return `hover:bg-gray-100 dark:hover:bg-gray-900`;
    }
}

export type ColorType = "primary" | "primary-outline" | "light";
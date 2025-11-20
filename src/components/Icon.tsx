export interface IconProps {
    iconName?: string;
    className?: string;
}

export default function Icon(
    { className, iconName }: IconProps
) {
    className ??= "";
    className += " material-symbols-outlined"

    return (
        <span className={className}>{iconName}</span>
    )
}
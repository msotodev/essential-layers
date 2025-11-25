export function Typo(
    { children, type }: TypoProps
) {
    if (type == "normal") return (<p>{children}</p>)

    if (type == "paragraph") return (
        <p>{children}</p>
    );

    if (type == "heading") return (
        <p className="text-lg sm:text-xl">{children}</p>
    )

    return (
        <h2 className={`${type == "title" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} font-semibold`}>{children}</h2>
    );
}

export interface TypoProps {
    children: React.ReactNode;
    type: TypoType;
}

export type TypoType = "title" | "subtitle" | "heading" | "paragraph" | "normal";
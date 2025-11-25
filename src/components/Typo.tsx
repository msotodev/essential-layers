export function Typo(
    { children, type }: TypoProps
) {
    if (type == "paragraph") return (
        <p>{children}</p>
    );

    return (
        <h2 className={`${type == "title" ? "text-3xl" : "text-2xl"} font-semibold`}>{children}</h2>
    );
}

export interface TypoProps {
    children: React.ReactElement | string;
    type: TypoType;
}

export type TypoType = "title" | "subtitle" | "paragraph";
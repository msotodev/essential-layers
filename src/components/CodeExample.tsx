export interface CodeExpampleProps {
    title: string;
    code: string;
}

export default function CodeExpample(
    { title, code }: CodeExpampleProps
) {
    return (
        <section className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">{title}</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                {code}
            </pre>
        </section>
    );
}
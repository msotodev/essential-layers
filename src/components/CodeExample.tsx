export interface CodeExpampleProps {
    title: string;
    code: string;
}

export default function CodeExpample(
    { title, code }: CodeExpampleProps
) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-xl font-medium">{title}</h3>
            <pre className="bg-sky-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 border-[4px] border-sky-100 dark:border-gray-900 rounded overflow-x-auto">
                {code}
            </pre>
        </section>
    );
}
import toast from "react-hot-toast";
import { useClipboard } from "../hooks/useClipboard";
import Button from "./buttons/Button";

export interface CodeExpampleProps {
    title: string;
    code: string;
}

export default function CodeExpample(
    { title, code }: CodeExpampleProps
) {
    const { copied, copy } = useClipboard();

    const handleCopy = async () => {
        await copy(code);
        
        toast.success(`Copied successfully!`);
    }

    return (
        <section className="flex flex-col gap-3">
            <div className="flex justify-between">
                <h3 className="text-xl font-medium">{title}</h3>

                {
                    copied ? <Button iconName="library_add_check" /> : <Button iconName="content_copy" onClick={handleCopy} />
                }
            </div>
            <pre className="bg-sky-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 border-[4px] border-sky-100 dark:border-gray-900 rounded overflow-x-auto">
                {code}
            </pre>
        </section>
    );
}
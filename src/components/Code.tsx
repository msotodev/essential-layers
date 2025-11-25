import toast from "react-hot-toast";
import { useClipboard } from "../hooks/useClipboard";
import Button from "./buttons/Button";

export default function Code(
    { title = "Undefined", code, showCopy = true }: CodeProps
) {
    const { copied, copy } = useClipboard();

    const handleCopy = async () => {
        await copy(code);

        toast.success(`Copied successfully!`);
    }

    return (
        <pre className="bg-sky-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-[4px] border-sky-100 dark:border-gray-900 rounded overflow-x-auto">
            <div className="flex justify-between">
                <span className="text-green-50/50 pl-4 pt-4">{title}</span>
                {showCopy && copied ? <Button iconName="library_add_check" /> : <Button iconName="content_copy" onClick={handleCopy} />}
            </div>
            <div className="p-4">
                {code}
            </div>
        </pre>
    );
}

export interface CodeProps {
    title: string;
    code: string;
    showCopy?: boolean;
}
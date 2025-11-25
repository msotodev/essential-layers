import toast from "react-hot-toast";
import { useClipboard } from "../hooks/useClipboard";
import Button from "./buttons/Button";
import Code from "./Code";

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
            <Code code={code} />
        </section>
    );
}
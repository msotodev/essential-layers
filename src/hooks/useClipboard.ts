import { useState } from "react";

export function useClipboard() {
    const [copied, setCopied] = useState(false);

    const copy = async (text: string) => {
        if (!navigator.clipboard) {
            console.warn("Clipboard API not supported");
            return false;
        }

        if (!text) return false;

        try {
            await navigator.clipboard.writeText(text);

            setCopied(true);
            setTimeout(() => setCopied(false), 2000);

            return true;
        } catch (err) {
            console.error("Failed to copy!", err);
            setCopied(false);

            return false;
        }
    };

    return { copied, copy };
}
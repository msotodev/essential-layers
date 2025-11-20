import React, { useState } from 'react';

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="space-y-2">
            {items.map((item, idx) => (
                <div key={idx} className="border rounded">
                    <button
                        className="w-full text-left p-4 flex justify-between items-center"
                        onClick={() => toggle(idx)}
                    >
                        <span className="font-medium">{item.title}</span>
                        <span>{openIndex === idx ? '-' : '+'}</span>
                    </button>
                    {openIndex === idx && (
                        <div className="p-4 border-t bg-gray-50">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};
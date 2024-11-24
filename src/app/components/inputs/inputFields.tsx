import { useState } from "react";
import { ItemsObject } from "@/app/create/page";

interface TextFieldProps {
    field: string;
    value: string;
    onChange: (value: string) => void;
}

interface DynamicListFieldProps {
    field: string;
    steps: ItemsObject;
    onSubmit: (input: string) => void;
    onRemove: (id: string) => void;
    isOrdered: boolean;
}

interface DynamicListProps {
    children: React.ReactNode;
    isOrdered: boolean;
}

export function TextField({ field, value, onChange }: TextFieldProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <input
            id={field}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Input ${field.split('-').join(' ')}...`}
        />
    );
}

function DynamicList({ children, isOrdered }: DynamicListProps) {
    if (isOrdered) {
        return (
            <ol className="list-decimal list-inside">
                {children}
            </ol>
        );
    }
    else {
        return (
            <ul className="list-disc list-inside">
                {children}
            </ul>
        );
    }
}

export function DynamicListField({ field, steps, onSubmit, onRemove, isOrdered }: DynamicListFieldProps) {
    const [input, setInput] = useState('');

    return (
        <div>
            <div className="flex items-end space-x-2 mb-3">
                <textarea
                    id={field}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Add ${field.split('-')}...`}
                    className="resize-none border rounded p-2 flex-1 h-20"
                />
                <button
                    className="border rounded-full px-2 border-gray-600 text-gray-700 shadow-sm hover:scale-105 hover:shadow-md"
                    id="add-list-item"
                    type="button"
                    onClick={() => {
                        if (input.trim() !== '') {
                            // Add the new step to the list
                            onSubmit(input);

                            // Clear the input field
                            setInput('');
                        }
                    }}
                >
                    Add
                </button>
            </div>
            <DynamicList isOrdered={isOrdered}>
                {Object.entries(steps).map(([id, item]) => (
                    <li
                        key={id}
                        onClick={() => onRemove(id)}
                        className="hover:scale-105 hover:line-through hover:text-red-800"
                    >
                        {item}
                    </li>
                ))}
            </DynamicList>
        </div>
    );
}

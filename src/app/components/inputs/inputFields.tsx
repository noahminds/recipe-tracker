import { useState } from "react";
import { ItemsObject } from "@/app/create/page";

interface TextFieldProps {
    field: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    'aria-label'?: string;
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

export function TextField({ field, value, onChange, className, 'aria-label': ariaLabel }: TextFieldProps) {
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
            className={className}
            aria-label={ariaLabel}
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
                    aria-label={`Add new ${field}`}
                />
                <button
                    className="border rounded-full px-2 border-gray-600 text-gray-700 shadow-sm hover:scale-105 hover:shadow-md"
                    id={`add-${field}`}
                    type="button"
                    onClick={() => {
                        if (input.trim() !== '') {
                            // Add the new step to the list
                            onSubmit(input);

                            // Clear the input field
                            setInput('');
                        }
                    }}
                    aria-label={`Add ${field} to list`}
                >
                    Add
                </button>
            </div>
            <div
                id={`${field}-list`}
                role="region"
                aria-label={`${field} list`}
            >
                <DynamicList isOrdered={isOrdered}>
                    {Object.entries(steps).map(([id, item]) => (
                        <li
                            key={id}
                            onClick={() => onRemove(id)}
                            className="hover:scale-105 hover:line-through hover:text-red-800"
                            role="button"
                            aria-label={`${item}. Press Enter to remove`}
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    onRemove(id);
                                }
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </DynamicList>
            </div>
        </div>
    );
}

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
    return (
        <input
            id={field}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Input ${field.split('-')}...`}
        />
    );
}

function DynamicList({ children, isOrdered }: DynamicListProps) {
    if (isOrdered) {
        return (
            <ol className="list-decimal pl-5">
                {children}
            </ol>
        );
    }
    else {
        return (
            <ul className="list-disc pl-5">
                {children}
            </ul>
        );
    }
}

export function DynamicListField({ field, steps, onSubmit, onRemove, isOrdered }: DynamicListFieldProps) {
    const [input, setInput] = useState('');

    return (
        <div>
            <textarea
                id={field}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Add ${field.split('-')}...`}
            />
            <DynamicList isOrdered={isOrdered}>
                {Object.entries(steps).map(([id, item]) => (
                    <li key={id}>
                        <button
                            id="delete-button"
                            type="button"
                            onClick={() => {
                                onRemove(id);
                            }}
                            className="hover:scale-105 hover:line-through hover:text-red-800"
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </DynamicList>
            <button
                id="add-button"
                type="button"
                onClick={() => {
                    if (input.trim() != '') {
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
    );
}

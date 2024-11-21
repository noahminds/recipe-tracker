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

interface DynamicListProps {
    children: React.ReactNode;
    isOrdered: boolean;
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

export function DynamicListField({ field, steps, onSubmit, isOrdered }: DynamicListFieldProps) {
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
                {Object.entries(steps).map(([id, item]) => {
                    return (
                        <li key={id}>
                            {item}
                        </li>
                    );
                })}
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

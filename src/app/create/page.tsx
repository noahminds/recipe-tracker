'use client'

import { v4 as uuidv4 } from 'uuid';
import { useRecipeContext } from '@components/recipeContext';
import { TextField, DynamicListField } from '@components/inputs/inputFields'
import { useState } from 'react';
import './styles.css';

// Key - id: string
// Value - item: string
export type ItemsObject = Record<string, string>;

export default function CreateRecipe() {
    // Use recipe context
    const { recipes, setRecipes } = useRecipeContext();

    // Use states for form fields
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState<ItemsObject>({});

    // Helper function for removing ingredients
    const handleRemoveIngredient = (id: string) => {
        const updatedIngredients: ItemsObject = { ...ingredients };
        delete updatedIngredients[id];
        setIngredients(updatedIngredients)
    };

    return (
        <main>
            <form
                aria-label="New recipe form"
                className="flex flex-col gap-y-8">
                <div>
                    <label>Recipe Name</label>
                    <TextField
                        field="recipe-name"
                        value={title}
                        onChange={(value) => {
                            setTitle(value);
                        }}
                    />
                </div>
                <div>
                    {/* Todo add a functional button that opens a pop-up from which the user can upload an image file*/}
                    {/* Button placeholder - non-functional */}
                    <button className="border pr-3 pl-3 rounded-full shadow-sm bg-blue-500 text-white">(Optional) Upload an Image</button>
                </div>
                <div>
                    <label>Add Ingredients</label>
                    <DynamicListField
                        field="ingredients"
                        steps={ingredients}
                        onSubmit={(input) => {
                            // Generate a unique id
                            const id = uuidv4();

                            // Add the new ingredient to the list
                            setIngredients({
                                ...ingredients,
                                [id]: input,
                            });
                        }}
                        onRemove={handleRemoveIngredient}
                        isOrdered={false}
                    />
                </div>
                <div>
                    <label>Add Instructions</label>
                    {/* TODO: Re-use step component*/}
                </div>
            </form>
        </main>
    );
}
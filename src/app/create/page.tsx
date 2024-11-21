'use client'

import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { useRecipeContext, Recipe } from '@components/recipeContext';
import { TextField, DynamicListField } from '@components/inputs/inputFields'
import { useState } from 'react';
import './styles.css';

// Key - id: string
// Value - item: string
export type ItemsObject = Record<string, string>;

export default function CreateRecipe() {
    // Use recipe context
    const { recipes, setRecipes } = useRecipeContext();

    // Use router
    const router = useRouter();

    // Use states for form fields
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState<ItemsObject>({});
    const [instructions, setInstructions] = useState<ItemsObject>({})

    // Helper function for removing ingredients
    const handleRemoveIngredient = (id: string) => {
        const updatedIngredients: ItemsObject = { ...ingredients };
        delete updatedIngredients[id];
        setIngredients(updatedIngredients)
    };

    // Helper function for removing instructions
    const handleRemoveInstruction = (id: string) => {
        const updatedInstructions: ItemsObject = { ...instructions };
        delete updatedInstructions[id];
        setInstructions(updatedInstructions)
    };

    return (
        <main className="text-gray-700">
            <form
                aria-label="New recipe form"
                className="flex flex-col gap-y-8"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (title.trim() != '' && Object.keys(ingredients).length > 0 && Object.keys(instructions).length > 0) {
                        const recipe: Recipe = {
                            title: title,
                            ingredients: Object.values(ingredients),
                            instructions: Object.values(instructions),
                        };

                        const id = uuidv4();

                        setRecipes(new Map(recipes).set(id, recipe));

                        // Clear form fields
                        setTitle('');
                        setIngredients({});
                        setInstructions({});

                        // Route the user to the recipe's detail page
                        router.push(`/recipes/${id}`);
                    }

                }}
            >
                <div>
                    <label>Name Your Recipe</label>
                    <TextField
                        field="recipe-name"
                        value={title}
                        onChange={(value) => {
                            setTitle(value);
                        }}
                    />
                </div>
                <div>
                    {/* TODO: add a functional button that opens a pop-up from which the user can upload an image file*/}
                    {/* Button placeholder - non-functional */}
                    <button
                        id="upload-image"
                        type="button"
                        className="border px-2 rounded-full shadow-sm bg-blue-500 text-white"
                    >
                        (Optional) Upload an Image
                    </button>
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
                    <DynamicListField
                        field="instructions"
                        steps={instructions}
                        onSubmit={(input) => {
                            // Generate a unique id
                            const id = uuidv4();

                            // Add the new ingredient to the list
                            setInstructions({
                                ...instructions,
                                [id]: input,
                            });
                        }}
                        onRemove={handleRemoveInstruction}
                        isOrdered={true}
                    />
                </div>
                <div>
                    <button
                        id="submit-recipe"
                        type="submit"
                        className="border rounded-full px-2 border-gray-600 text-gray-700 text-lg shadow-sm hover:scale-105 hover:shadow-md"
                    >
                        Add to Recipes
                    </button>
                </div>
            </form>
        </main>
    );
}
'use client'

import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { useRecipeContext, Recipe } from '@components/recipeContext';
import { TextField, DynamicListField } from '@components/inputs/inputFields'
import { useState } from 'react';
import ImageUploadModal from '@components/inputs/imageUploadModal';
import '../globals.css';

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
    const [image, setImage] = useState<string | null>(null);

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
        <main
            aria-labelledby="create-recipe-title"
            className="text-gray-700 p-8"
        >
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

                        if (image) {
                            recipe.image = image;
                        }

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
                <div className="flex flex-col space-y-2 w-96">
                    <TextField
                        field="recipe-name"
                        value={title}
                        onChange={(value) => {
                            setTitle(value);
                        }}
                        className="text-xl"
                        aria-label="Recipe name input"
                    />
                </div>
                <ImageUploadModal
                    curr_image={image}
                    onModalSubmit={(input: string) => setImage(input)}
                />
                <section className="grid grid-cols-5" aria-label="Recipe details">
                    <div className="col-span-2 w-3/4">
                        <label htmlFor="ingredients">Ingredients</label>
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
                    <div className="w-3/4 col-start-3 col-span-3">
                        <label htmlFor="instructions">Instructions</label>
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
                </section>
                <nav aria-label="Form actions">
                    <button
                        id="submit-recipe"
                        type="submit"
                        className="border rounded-full px-2 border-gray-600 text-gray-700 text-lg shadow-sm hover:scale-105 hover:shadow-md"
                        aria-label="Add recipe to collection"
                    >
                        Add to Recipes
                    </button>
                </nav>
            </form>
        </main>
    );
}
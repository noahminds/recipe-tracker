'use client'

import { v4 as uuidv4 } from 'uuid';
import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecipeContext, Recipe } from '@components/recipeContext';
import { TextField, DynamicListField } from '@components/inputs/inputFields'
import { ItemsObject } from '@/app/create/page';
import './styles.css';

interface EditRecipeProps {
    params: Promise<{ slug: string }>;
}

function arrayToItemsObject(array: string[]): ItemsObject {
    const itemsObject: ItemsObject = {};
    array.map((value, index) => {
        itemsObject[index.toString()] = value;
    });
    return itemsObject;
}

export default function EditRecipe({ params }: EditRecipeProps) {
    const { recipes, setRecipes } = useRecipeContext();
    const { slug } = use(params);
    const router = useRouter();

    // Lookup the recipe in the RecipeMap by the slug
    const recipe = slug && recipes.get(slug);

    // Use states for form fields
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState<ItemsObject>({});
    const [instructions, setInstructions] = useState<ItemsObject>({});

    // Pre-populate the fields when the component mounts or when the recipe changes
    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setIngredients(arrayToItemsObject(recipe.ingredients));
            setInstructions(arrayToItemsObject(recipe.instructions));
        }
    }, [recipe]);

    if (!recipe) {
        console.log("**ERROR** Recipe not found", slug);
        return (
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-red-600">Recipe Not Found</h1>
                <p className="text-lg">The recipe you are looking for does not exist.</p>
            </main>
        );
    }

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
        <main className="text-gray-700 p-8">
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

                        // Replace the existing recipe with the updated one
                        setRecipes(new Map(recipes.set(slug, recipe)));

                        // Route the user back to the recipe's detail page
                        router.push(`/recipes/${slug}`);
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
                        (Optional) Replace the Image
                    </button>
                    {/* TODO: include the default image or the recipe image if the user added one */}
                </div>
                <section className="grid grid-cols-5">
                    <div className="col-span-2 w-3/4">
                        <label>Ingredients</label>
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
                        <label>Instructions</label>
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
                <div>
                    <button
                        id="submit-recipe"
                        type="submit"
                        className="border rounded-full px-2 border-gray-600 text-gray-700 text-lg shadow-sm hover:scale-105 hover:shadow-md"
                    >
                        Update Recipe
                    </button>
                </div>
            </form>
        </main>
    );
}
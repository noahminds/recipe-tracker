'use client'

import React from 'react';
import { use, useEffect, useState } from 'react';
import { useRecipeContext } from '@components/recipeContext';
import Link from 'next/link';

interface RecipePageProps {
    params: Promise<{ slug: string }>;
}

export default function RecipePage({ params }: RecipePageProps) {
    const { recipes } = useRecipeContext()
    const { slug } = use(params);
    const [recipe, setRecipe] = useState(() => recipes.get(slug));

    useEffect(() => {
        setRecipe(recipes.get(slug));
    }, [recipes, slug])

    if (!recipe) {
        console.log("**ERROR** Recipe not found", slug);
        return (
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold text-red-600">Recipe Not Found</h1>
                <p className="text-lg">The recipe you are looking for does not exist.</p>
            </main>
        );
    }

    return (
        <main>
            <article className="flex flex-col space-y-4 p-8">
                <h1 className="text-xl">{recipe.title}</h1>

                {/* TODO: Add image */}

                <section className="grid grid-cols-5">
                    <div aria-label="Ingredients">
                        <h2 className="text-lg font-medium underline">Ingredients:</h2>
                        <ul className="list-disc list-inside">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div aria-label="Instructions" className="col-start-3 col-span-3">
                        <h2 className="text-lg font-medium underline">Instructions:</h2>
                        <ol className="list-decimal list-inside">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </section>
                <div>
                    <Link
                        href={`/edit/${slug}`}
                        key={slug}
                        className="border rounded-full px-2 border-gray-600 text-gray-700 text-lg shadow-sm hover:scale-105 hover:shadow-md"
                    >
                        Edit Recipe
                    </Link>
                </div>
            </article>
        </main>
    );
};
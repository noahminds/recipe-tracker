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
        <main aria-labelledby="recipe-title">
            <article className="flex flex-col space-y-8 p-8">
                <h1 id="recipe-title" className="text-4xl text-red-800">{recipe.title}</h1>
                <section className="grid grid-cols-5" aria-label="Recipe details">
                    <div>
                        <h2 id="ingredients-heading" className="text-lg font-medium underline">Ingredients</h2>
                        <ul
                            role="list"
                            aria-labelledby="ingredients-heading"
                            className="list-disc list-inside"
                        >
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} role="list-item">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-start-3 col-span-3">
                        <h2 id="instructions-heading" className="text-lg font-medium underline">Instructions</h2>
                        <ol
                            role="list"
                            aria-labelledby="instructions-heading"
                            className="list-decimal list-inside"
                        >
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} role="list-item">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </section>
                <nav aria-label="Recipe actions">
                    <Link
                        href={`/edit/${slug}`}
                        key={slug}
                        className="border py-1 rounded-full px-2 border-gray-600 text-gray-700 text-lg shadow-sm hover:scale-105 hover:shadow-md"
                        aria-label="Edit this recipe"
                    >
                        Edit Recipe
                    </Link>
                </nav>
            </article>
        </main>
    );
};
import Image from "next/image";
import { useRecipeContext } from "./recipeContext";

interface RecipeCardProps {
    recipe_key: string;
};

export default function RecipeCard({ recipe_key }: RecipeCardProps) {
    const { recipes } = useRecipeContext();
    const recipe = recipes.get(recipe_key);

    // If recipe not found return a placeholder card 
    if (!recipe) {
        console.log("**ERROR** Recipe not found", recipe_key);
        return (
            <article
                className="flex items-center justify-center w-60 h-64 border rounded-xl shadow-sm bg-gray-50"
                aria-labelledby={`recipe-title-${recipe_key}`}
            >
                <h2
                    id={`recipe-title-${recipe_key}`}
                    className="text-md font-medium p-4 m-2 text-center"
                >
                    Recipe not found
                </h2>
            </article>
        );
    }

    // Return the recipe card
    return (
        <article
            className="flex flex-col items-center w-60 h-64 border rounded-xl shadow-sm bg-gray-50 hover:shadow-md hover:scale-105 hover:text-red-800"
            aria-labelledby={`recipe-title-${recipe_key}`}
        >
            <div className="relative w-full h-3/5">
                <Image
                    src={recipe.image || "/default-recipe-img.jpg"}
                    alt={`Photo of ${recipe.title}`}
                    fill
                    className="rounded-t-xl object-cover"
                />
            </div>
            <div className="flex-1 flex items-center justify-center text-center">
                <h2
                    id={`recipe-title-${recipe_key}`}
                    className="text-md font-medium p-4 m-2"
                >
                    {recipe.title}
                </h2>
            </div>
        </article>
    );
};

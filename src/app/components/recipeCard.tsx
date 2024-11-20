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
            <div className="flex flex-col items-center w-80 h-80 border rounded-xl shadow-sm bg-gray-100">
                <div className="flex-1 flex items-center justify-center text-center">
                    <h2 className="text-md font-medium p-4 m-2 text-red-600">
                        Recipe not found
                    </h2>
                </div>
            </div>
        );
    }

    // Unpack title and image from recipe
    const { title, image } = recipe;

    // Return the recipe card
    return (
        <div className="flex flex-col items-center w-80 h-80 border rounded-xl shadow-sm bg-gray-50 hover:shadow-md hover:scale-105 hover:text-red-800">
            <div className="relative w-full h-48">
                <Image
                    src={image || "/default-recipe-img.jpg"}
                    alt={`Photo of ${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>
            <div className="flex-1 flex items-center justify-center text-center">
                <h2 className="text-md font-medium p-4 m-2">{title}</h2>
            </div>
        </div>
    );
};

import Image from "next/image";
import { Recipe } from "../types/recipe";

interface RecipeCardProps {
    recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const { title, image } = recipe;


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
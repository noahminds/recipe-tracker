// import { useRouter } from 'next/router';
import { Recipe } from '../../../types/recipe';


export default function RecipePage() {
    // const router = useRouter();
    // const { slug } = router.query;

    // Temporary placeholder for recipe retrieved from context api
    const recipe: Recipe = {
        slug: 1,
        title: "Pumpkin Pie with exploding sugar beans",
        ingredients: ["Pumpkin", "Sugar", "Eggs", "Milk", "Cinnamon", "Pie Crust"],
        instructions: [
            "Mix pumpkin, sugar, eggs, milk, and cinnamon in a bowl.",
            "Pour mixture into pie crust.",
            "Bake for 45 minutes at 350 degrees."
        ]
    };

    return (
        <main>
            <article className="flex flex-col space-y-4 p-8">
                <h1 className="text-xl">{recipe.title}</h1>
                <div className="grid grid-cols-4">
                    <div aria-label="Ingredients">
                        <h2 className="text-lg font-medium underline">Ingredients:</h2>
                        <ul className="list-disc pl-5">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div aria-label="Instructions" className="col-start-2 col-span-3">
                        <h2 className="text-lg font-medium underline">Instructions:</h2>
                        <ol className="list-decimal pl-5">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="ml-4">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </article>
        </main>
    );
};
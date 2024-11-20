// import Image from "next/image";
import RecipeCard from "@components/recipecard"
import { Recipe } from "./types/recipe";

export default function Home() {
  const recipe1: Recipe = {
    id: 1,
    title: "Pumpkin Pie with exploding sugar beans",
    ingredients: ["Pumpkin", "Sugar", "Eggs", "Milk", "Cinnamon", "Pie Crust"],
    instructions: [
      "Mix pumpkin, sugar, eggs, milk, and cinnamon in a bowl.",
      "Pour mixture into pie crust.",
      "Bake for 45 minutes at 350 degrees."
    ]
  }

  return (
    <main>
      <RecipeCard recipe={recipe1} />
    </main>
  );
}

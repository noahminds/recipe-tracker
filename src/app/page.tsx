'use client'

import Link from "next/link";
import RecipeCard from "@components/recipeCard"
import { useRecipeContext } from "@components/recipeContext";

export default function Home() {
  const { recipes } = useRecipeContext();
  const recipeKeys = Array.from(recipes.keys());

  return (
    <main>
      <section
        aria-label="Recipe Cards"
        className="grid gap-4 justify-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}
      >
        {recipeKeys.map((k) => (
          <Link href={`/recipes/${k}`} key={k}>
            <RecipeCard recipe_key={k} />
          </Link>
        ))}
      </section>
    </main>
  );
}

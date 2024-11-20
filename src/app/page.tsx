'use client'

import Link from "next/link";
import RecipeCard from "@components/recipeCard"
import { useRecipeContext } from "@components/recipeContext";

export default function Home() {

  const { recipes } = useRecipeContext();

  return (
    <main>
      <section
        aria-label="Recipe Cards"
      >
        {Array.from(recipes.keys()).map((k) => (
          <Link href={`/pages/recipes/${k}`} key={k}>
            <RecipeCard recipe_key={k} />
          </Link>
        ))}
      </section>
    </main>
  );
}

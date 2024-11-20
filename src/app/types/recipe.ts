export type Recipe = {
    title: string;
    image?: string;
    ingredients: string[];
    instructions: string[];
}

export type RecipeMap = Map<number, Recipe>
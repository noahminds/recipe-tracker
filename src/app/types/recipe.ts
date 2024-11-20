export type Recipe = {
    slug: number;
    title: string;
    image?: string;
    ingredients: string[];
    instructions: string[];
}

export type RecipeMap = {
    [slug: number]: Recipe;
}
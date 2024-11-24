'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface RecipeContextProviderProps {
    children: ReactNode;
}

export type Recipe = {
    title: string;
    image?: string;
    ingredients: string[];
    instructions: string[];
}

type RecipeMap = Map<string, Recipe>

interface RecipeContext {
    recipes: RecipeMap;
    setRecipes: Dispatch<SetStateAction<RecipeMap>>;
}

const RecipeContext = createContext<RecipeContext>({
    recipes: new Map(),
    setRecipes: () => { },
});

export const useRecipeContext = () => useContext(RecipeContext);

// Provide a few default recipes cards
const exampleRecipes: RecipeMap = new Map([
    ["1", {
        title: "Pumpkin Pie",
        image: "/pumpkin_pie.webp",
        ingredients: ["Pumpkin", "Sugar", "Eggs", "Milk", "Cinnamon", "Pie Crust"],
        instructions: [
            "Mix pumpkin, sugar, eggs, milk, and cinnamon in a bowl.",
            "Pour mixture into pie crust.",
            "Bake for 45 minutes at 350 degrees."
        ]
    }],
    ["2", {
        title: "Apple Pie",
        image: "/apple_pie.webp",
        ingredients: ["Apples", "Sugar", "Cinnamon", "Pie Crust"],
        instructions: [
            "Slice apples.",
            "Mix apples with sugar and cinnamon.",
            "Pour mixture into pie crust.",
            "Bake for 45 minutes at 350 degrees."
        ]
    }],
    ["3", {
        title: "Emince de Veau a la Moutarde",
        image: "/emince_de_veau.webp",
        ingredients: ["Veal", "Shallots", "Mushrooms", "Dry White Wine", "Mustard", "Cream", "Butter", "Salt", "Pepper"],
        instructions: [
            "Slice veal into thin strips.",
            "Cook veal in butter until browned.",
            "Remove the veal from the pan with a slotted spoon and set aside.",
            "Add mushrooms and shallots into the pan and cook until soft.",
            "Add wine and reduce by half.",
            "Turn the heat to low and add mustard and cream.",
            "Simmer for 5 minutes.",
            "Season with salt and pepper.",
            "Add back the veal and heat through.",
        ]
    }],
    ["4", {
        title: "Spaghetti Carbonara",
        image: "/spaghetti_carbonara.webp",
        ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Pepper"],
        instructions: [
            "Cook spaghetti according to package directions.",
            "Fry pancetta in a pan until crispy.",
            "Whisk eggs and cheese together.",
            "Drain spaghetti and add to the pan with pancetta.",
            "Remove from heat and add egg mixture.",
            "Stir until the eggs are cooked.",
            "Season with pepper.",
        ],
    }]
]);

export default function RecipeContextProvider({
    children,
}: RecipeContextProviderProps) {
    const [recipes, setRecipes] = useState<RecipeMap>(exampleRecipes);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
}
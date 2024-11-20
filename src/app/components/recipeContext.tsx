import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { RecipeMap } from '../types/recipe';

interface RecipeContextProviderProps {
    children: ReactNode;
}

interface RecipeContext {
    recipes: RecipeMap;
    setRecipes: Dispatch<SetStateAction<RecipeMap>>;
}

const RecipeContext = createContext<RecipeContext>({
    recipes: {},
    setRecipes: () => { },
});

export const useRecipeContext = () => useContext(RecipeContext);

export default function RecipeContextProvider({
    children,
}: RecipeContextProviderProps) {
    const [recipes, setRecipes] = useState({});

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
}
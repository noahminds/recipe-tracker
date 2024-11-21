'use client'

import { useRecipeContext } from '@components/recipeContext';
import TextField from '@components/inputs/editableTextField'
import { useState } from 'react';
import './styles.css';

export default function CreateRecipe() {
    // Use recipe context
    const { recipes, setRecipes } = useRecipeContext();

    // Use states for form fields
    const [title, setTitle] = useState('');

    return (
        <main>
            <form aria-label="New recipe form">
                <div>
                    <label>Recipe Name</label>
                    <TextField
                        value={title}
                        onChange={(value) => {
                            setTitle(value);
                        }}
                    />
                </div>
                <div>
                    {/* Todo add a functional button that opens a pop-up from which the user can upload an image file*/}
                    {/* Button placeholder - non-functional */}
                    <button className="border pr-3 pl-3 rounded-full shadow-sm bg-blue-500 text-white">(Optional) Upload an Image</button>
                </div>
                <div>
                    <label>Add Ingredients</label>
                    {/* TODO: Add step component enabling users to add items to a list */}
                </div>
                <div>
                    <label>Add Instructions</label>
                    {/* TODO: Re-use step component*/}
                </div>
            </form>
        </main>
    );
}
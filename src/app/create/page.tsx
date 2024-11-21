import './styles.css';

export default function CreateRecipe() {
    return (
        <main>
            <section aria-label="New recipe form">
                <div>
                    <h2>Recipe Name</h2>
                    {/* TODO: Create input component */}
                </div>
                <div>
                    <h2>(Optional) Upload an Image</h2>
                    {/* Todo add a functional button that opens a pop-up from which the user can upload an image file*/}
                    {/* Button placeholder - non-functional */}
                    <button className="border pr-3 pl-3 rounded-full shadow-sm bg-blue-500 text-white">Upload</button>
                </div>
                <div>
                    <h2>Add Ingredients</h2>
                    {/* TODO: Add step component enabling users to add items to a list */}
                </div>
                <div>
                    <h2>Add Instructions</h2>
                    {/* TODO: Re-use step component*/}
                </div>
            </section>
        </main>
    );
}
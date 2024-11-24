[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wEmr3Vja)

# RecipeStep Tracker

## Overview
This project is a multi-page web app designed to create, manage, and view recipes. A number of key features facilitate recipe management, including creating recipes, displaying them on a homepage as cards, navigating to individual recipe pages, and editing the recipes. The app was built with Next.js and TypeScript.

---

## Features

### Homepage
- **Recipe Cards**:
  - Displays all created recipes as individual cards.
  - Each card includes:
    - The title of the recipe.
    - [Optional] An image of the recipe (uploaded by the user).
  - Clicking on a recipe card navigates to a page with the full recipe details.

- **Navigation Bar**:
  - A navigation bar at the top of the screen provides access to:
    - The homepage consisting of all the recipe cards.
    - The recipe creation page.

### Recipe Creation Page
- **Form for Adding Recipes**:
  - A form allows users to input details for a new recipe, including:
    - Recipe title.
    - List of ingredients.
    - Recipe instructions (steps).
    - [Optional] A photo of the recipe.
  - Submitting the form adds the recipe to the homepage as a new recipe card and creates its corresponding detailed recipe page.

### Recipe Detail Page
- **Detailed View**:
  - Clicking a recipe card on the homepage opens a page with:
    - The recipe's title.
    - The list of ingredients.
    - The ordered list of instructions.
    - The option to edit the recipe.
   
### Recipe Edit Page
- **Form for Editing Recipes**
  - A form that allows users to edit their existing recipe, including:
    - Recipe title.
    - List of ingredients.
    - Recipe instructions (steps).
    - [Optional] A photo of the recipe.
  - Submitting the form updates the recipe card and detailed recipe page.
  - The cancel button undoes any changes and redirects the user back to the detailed recipe page.
 
## Accessibility

- All forms for creating and editing recipes are accessible with a screen reader.
- Navigation of the recipe detail pages is still not fully functional as a screen reader jumps over the recipe details. This is an area for improvement.

## Credits

- The modal for uploading images was inspired by the tutorial [Create a modal with React (Pop-up)](https://www.youtube.com/watch?v=9DwGahSqcEc) on YouTube.

## Self Reflection

### Website Design

- I think the website is pretty responsive and user-friendly overall. The layout is simple but effective, and the color choices make it easy for people with low vision to use since there’s good contrast throughout. I used semantic HTML elements and ARIA attributes to make it more accessible for people using screen readers. For example, I made sure users could complete all the forms for creating and editing recipes using a screen reader, and I tested that to confirm it works.

- That said, I ran into a problem on the recipe detail pages where the screen reader skips over the recipe content like the title, ingredients, and instructions. I couldn’t figure out how to fix that yet, so that’s something I’d improve in the future. The navigation bar also makes it easy for users to move around the app and find what they need.

### Code Quality

- I built a number of components from scratch and integrated them into the four main pages of the app. For example, on the main page with the recipe cards, I created the recipe card component. This made it really easy to replicate a card for each recipe and display them effectively on the homepage. I also built a recipe context component, which is crucial for the entire app. It manages the recipe map—a data structure that maps unique IDs to each recipe. This map made it super efficient to look up recipes, especially since I used dynamic routing for some pages. For instance, the detailed recipe pages use the recipe ID as the slug to fetch the right recipe from the map. The edit page also uses this dynamic routing to load the recipe into a form for editing, pre-populating all the fields so users can make updates easily.

- Another component I built and reused a lot was the input fields. These fields handle two types of inputs: one where users can dynamically add items to a list (like ingredients or instructions) and another for standard text inputs. I used these across the app—for creating and editing recipes and in the modal for uploading images.

- I think I did a good job separating my components. I used smaller, reusable components to build up to larger ones, and then integrated those into the pages. This made it easy to reuse components and keep the code organized. I also leveraged state handling and the Context API throughout the app. For example, I used states to manage dynamic behaviors like activating or deactivating the image upload modal and tracking the various parts of a recipe during creation or editing. The Context API wraps the entire app since all pages need access to the recipe data, but if I added features unrelated to recipes in the future, I could easily scope the context to just the parts that need it.

- When it comes to version control, I think I used Git really effectively. I’ve got over 50 commits, each with meaningful messages that explain what was changed. I committed my code in small, logical chunks, which made it easy to track progress and roll back if needed.

### Self-Assessment

- I challenged myself in a number of ways in this project. I decided to use TypeScript, which requires a bit more effort but was ultimately worth it because it helped me avoid mistakes and made debugging easier. Strongly typing props, classes, and objects was especially helpful as the app got more complex.

- Another challenge was allowing users to upload a cover photo for recipes. That cover photo is used in the homepage card, and I used state to toggle a modal for uploading the image. This taught me how to use state for managing dynamic views and gave me a better understanding of the Next.js documentation, particularly for working with image types and configuring loaders to handle external domains. Since this was a small project without security concerns, I didn’t need to restrict domains, which simplified the process.

- I also wanted the user interaction to feel seamless and polished. For example, users can remove items from a list (like ingredients or steps) by simply hovering over the line, rather than using a delete button. This required learning more about using Tailwind CSS for hover actions, which was challenging but rewarding.

- Through this process, I learned a lot about building full web apps with React. I feel much more confident about creating components, pages, and managing dependencies between them. Using state and the Context API effectively was another big takeaway. Some parts of the project, like integrating image uploads with context and creating dynamic components for lists, were complex enough that I couldn’t rely on Googling or AI for solutions—I had to rely on my own understanding of state management and dependency injection to get them right.

- That said, there are areas for improvement. For example, my use of useEffect could be better. Without a backend or local storage, it’s hard to know if the way I’m handling state updates across pages is optimal. Adding a backend or local storage in the future would help make the app more functional and let me test whether my use of useEffect is correct.

- Another improvement would be implementing storage for recipes so changes persist. Right now, the app doesn’t actually save data, so it’s not a fully functional tool. Adding storage would make it feel more like a real-world app.

- Lastly, I missed the initial submission deadline by a day, which was unfortunate. But since then, I’ve put in a lot of effort to go above and beyond the requirements. I’m proud of the final result. The app is accessible, visually pleasing, and includes features that make it easy for users to interact with. I hope this reflects the progress I’ve made, even though I didn’t meet the original deadline.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

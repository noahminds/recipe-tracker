[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wEmr3Vja)

# RecipeStep Tracker

## Overview
This project is a two-page web app designed to create, manage, and view recipes. The goal is to implement key features for recipe management, including creating recipes, displaying them on a homepage, and navigating to individual recipe pages. The app will be built with Next.js and TypeScript, following the requirements of the project.

---

## Features

### Homepage
- **Recipe Cards**:
  - Displays all created recipes as individual cards.
  - Each card includes:
    - The title of the recipe.
    - [Optional] An image of the recipe (uploaded by the user during recipe creation).
  - Clicking on a recipe card navigates to a page with the full recipe details.

- **Navigation Bar**:
  - A navigation bar at the top of the screen provides access to:
    - The homepage.
    - The recipe creation page.

### Recipe Creation Page
- **Form for Adding Recipes**:
  - A form allows users to input details for a new recipe, including:
    - Recipe title.
    - List of ingredients.
    - Recipe instructions (steps).
    - [Optional] A photo of the recipe (uploaded by the user).
  - Submitting the form adds the recipe to the homepage as a new recipe card and creates its corresponding detailed recipe page.

### Recipe Detail Page
- **Detailed View**:
  - Clicking a recipe card on the homepage opens a page with:
    - The recipe's title.
    - The list of ingredients.
    - The instructions.
    - [Optional] The recipe's image.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

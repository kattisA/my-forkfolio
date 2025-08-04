import { useEffect, useState } from 'react';
import { RecipeList } from './RecipeList';
import type { Recipe } from '../types';

export const RecipeLoader = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kattisA/recipes/main/recipes.json')
            .then(res => res.json())
            .then((data: unknown) => {
                if (Array.isArray(data)) {
                    const validRecipes = data.filter((item): item is Recipe => {
                        return typeof item.id === 'string' && typeof item.title === 'string';
                    });
                    setRecipes(validRecipes);
                }
            });
    }, []);

    return <RecipeList recipes={recipes} />;
};

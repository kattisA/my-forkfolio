import { useEffect, useState } from 'react';
import type { Recipe } from '../types';

type UseRecipesResult = {
    recipes: Recipe[];
    categories: string[];
    loading: boolean;
    error: string | null;
};

export function useRecipes(): UseRecipesResult {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kattisA/recipes/main/recipes.json')
            .then(res => res.json())
            .then((data: unknown) => {
                if (Array.isArray(data)) {
                    const validRecipes = data.filter((item): item is Recipe => {
                        return typeof item.id === 'string' && typeof item.title === 'string';
                    });

                    setRecipes(validRecipes);

                    // Taking the categories
                    const uniq = Array.from(
                        new Set(
                            validRecipes
                                .map(r => r.category)
                                .filter((c): c is string => !!c && c.trim().length > 0)
                        )
                    );
                    setCategories(uniq);
                } else {
                    setError('Could not fetch the list of categories');
                }
            })
            .catch(() => setError('Error while fetching recipies'))
            .finally(() => setLoading(false));
    }, []);

    return { recipes, categories, loading, error };
}

import { RecipeCard } from './RecipeCard';
import type {Recipe} from "../types";

export const recipes: Recipe[] = [
    {
        id: 'sallad',
        title: 'Vegetarisk sallad',
        description: 'En grön och fräsch sallad',
        greenChoice: true,
    },
    {
        id: 'lasagne',
        title: 'Lasagne',
        description: 'En superhärlig lasagne',
    },
    {
        id: 'pizza',
        title: 'Pizza',
        description: 'Vem älskar inte pizza?',
    },
];

export const RecipeList = () => {
    return (
        <section>
            <div className="infoBox">
                <p>
                    Välj recept med <i className="fa fa-leaf greenChoice fa-lg" aria-hidden="true"></i> för ett grönare val
                </p>
            </div>
            <h2 className="sectionTitle">Mina recept</h2>
            <div className="sectionContainer">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </section>
    );
};

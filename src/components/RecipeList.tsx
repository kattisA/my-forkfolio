import { RecipeCard } from './RecipeCard';
import type {Recipe} from "../types";

interface Props {
    recipes: Recipe[];
}

export const RecipeList = ({ recipes }: Props) => {
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

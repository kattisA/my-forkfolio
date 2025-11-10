import type { Recipe } from "../types";
import { Link } from "react-router-dom";


interface Props {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: Props) => {
    const { id, title, description, greenChoice } = recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="recipeCard"
        >
            <article>
                <h3>{title}</h3>
                <div className="cardFooter">
                    <p>{description}</p>
                    <div className="iconContainer">
                        {greenChoice && (
                            <div className="tooltip">
                                <i className="fa fa-leaf greenChoice fa-lg" aria-hidden="true"></i>
                                <span className="tooltipText">Ett grönare val</span>
                            </div>
                        )}
                        <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    </div>
                </div>
            </article>
        </Link>

    );
};

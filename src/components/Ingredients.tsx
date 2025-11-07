import React from "react";
import type {Ingredient} from "../types";

type IngredientsProps = {
    title?: string;
    items: Ingredient[];
};

export const Ingredients: React.FC<IngredientsProps> = ({ title = "Ingredienser", items }) => {
    return (
        <div className="ingredients">
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.amount ? <span className="amount">{item.amount}</span> : null} {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
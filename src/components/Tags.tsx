import React from "react";
type TagsProps = {
    categories: string[];
    onSelect?: (category: string) => void;
};

export const Tags = ({ categories, onSelect }: TagsProps) => {
    if (categories.length === 0) return null;

    return (
        <div className="sectionContainer">
            {categories.map(category => (
                <button
                    key={category}
                    className="tag"
                    style={{verticalAlign: "middle"}}
                    onClick={() => onSelect?.(category)}
                    type="button"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Tags;
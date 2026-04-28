import React from "react";

type NumberedListTextProps = {
    myList: string[];
};

export const NumberedListText= ({myList}: NumberedListTextProps) => {
    return (
        <ol className="howList">
            {myList.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ol>
        )
}
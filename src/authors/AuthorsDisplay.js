import React from "react";

export function AuthorsDisplay(props){
    return (
        <div className = "display">
        <h3>Authors</h3>
        
        {props.authors.map(a =>(
            <p>{a.name}</p>
        ))}
        </div>

    );
}
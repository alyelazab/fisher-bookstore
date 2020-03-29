import React from "react";

export function AuthorsTable(props){
    return(
        <table className = "table table-striped table-bordered">
           <thead>
           <tr>
            <th style = "background-color: blue">Author ID</th>
            <th style = "background-color: green">Name</th>
            </tr>
            </thead>
            <tbody></tbody>
            
        </table>
    )
}
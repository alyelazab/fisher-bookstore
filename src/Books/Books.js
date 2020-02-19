import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";


export default class Books extends Component {
    constructor(props) {
    super(props);
    this.state = {
        books: [
            {
                id: 1,
                title: "Domain Driven Design",
                author: "Eric Evans",
                isbn: "978-0321125217"
            },
            {
                id: 2,
                title: "Accelerate",
                author: "Nicole Forsgren",
                isbn: "978-1942788331"
            },
        {
            id: 3,
            title: "The Mamba mentality",
            author: "Kobe Bryant",
            isbn: "978-0374201234"
        },
        {
            id: 4,
            title: "Dark Towers",
            author: "David Enrich",
            isbn: "978-0062878816"
        },
        {
            id: 5,
            title: "Little Fires Everywhere",
            author: "Celeste Ng",
            isbn: "978-0735224315"
        },
        {
            id: 6,
            title: "The Institue",
            author: "Stephen King",
            isbn: "978-1982110567"
        },
        {
            id: 7,
            title: "I promise",
            author: "Lebron James",
            isbn: "978-0062971067"
        },
        {
            id: 8,
            title: "Epoca: The Tree of Ecrof",
            author: "Kobe Bryant",
            isbn: "978-1949520071"
        }
        ]
    
    }
}
render () {
    return (
        <div className = "Books">
            <div className = "lander">
                <BookDisplay books = {this.state.books} />
            </div>
        </div>
    );
}
}

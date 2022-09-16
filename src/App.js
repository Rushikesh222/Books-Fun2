import React, { useState } from "react";
import "./styles.css";
const bookCollection = {
  Adventure: [
    {
      name: "Moby-Dick",
      writter: "Herman Melville"
    },
    {
      name: "he Call of the Wild",
      writter: "Jack London"
    },
    {
      name: "Odyssey",
      writter: " Homer"
    }
  ],
  Story: [
    {
      name: " In Search of Lost Time ",
      writter: "  Marcel Proust "
    },
    {
      name: "  Ulysses",
      writter: " James Joyce "
    },
    {
      name: "  Don Quixote ",
      writter: "  Miguel de Cervantes "
    }
  ],
  Horror: [
    {
      name: " Red Dragon ",
      writter: "  Thomas Harris "
    },
    {
      name: "   The Picture of Dorian Gray ",
      writter: " Oscar Wilde "
    },
    {
      name: "  Horns ",
      writter: "  Joe Hill "
    }
  ]
};
const booksInArr = Object.keys(bookCollection);

export default function App() {
  const [bookName, setBookName] = useState("Story");
  function likeClickHandler(type) {
    setBookName(type);
  }
  return (
    <div className="App">
      <div className="nameDiv">
        <h1>📚 Books For Fun</h1>
        {booksInArr.map((type) => {
          return (
            <button key={type} onClick={() => likeClickHandler(type)}>
              {type}
            </button>
          );
        })}
        <hr />
      </div>
      <ul>
        {bookCollection[bookName].map((book) => {
          return (
            <li key={book.writter}>
              <h2>{book.name}</h2>
              <h3>{book.writter}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";
import NotesBox from "../../components/NotesBox";

function Notes() {
  const [title, setTitle] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div className="container">
      <section className="notesinput">
        <h1>Sticky Notes</h1>
        <ul className="notesinput-text">
          <li className="notesinput-text-title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="title"
              name="title"
              placeholder="Your Title..."
              onChange={e => setTitle(e.target.value)}
            />
          </li>
          <li className="notesinput-text-area">
            <label htmlFor="note">Your Note</label>
            <textarea
              name="note"
              className="note"
              placeholder="Your Text..."
              onChange={e => setText(e.target.value)}
            ></textarea>
          </li>
        </ul>
        <button onClick={() => {
          setCounter(counter+ 1);
        }}>
          Create
          </button>
      </section>

      <section className="notesboxes">
        <h1>Notes: {counter}</h1>
        <ul>
          <NotesBox title={title} text={text}/>
        </ul>
      </section>
    </div>
  );
}

export default Notes;
import React, { useState } from "react";
import "./styles.css";
import NotesBox from "../../components/NotesBox";

function Notes() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [userNotes, setUserNotes] = useState<{val1:string, val2:string}[]>([]);

  function addNewUserNote() {
    setUserNotes([...userNotes, { val1: title, val2: text}]);
  }
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li className="notesinput-text-area">
            <label htmlFor="note">Your Note</label>
            <textarea
              name="note"
              className="note"
              placeholder="Your Text..."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </li>
        </ul>
        <button
          onClick={() => {
            setCounter(counter + 1);
            addNewUserNote();
          }}
        >
          Create
        </button>
        <h1>Notes: {counter}</h1>
      </section>
      {userNotes.map((userNote) => {
        return (
          <section className="notesboxes">
            <ul>
              <NotesBox title={userNote.val1} text={userNote.val2} />
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export default Notes;

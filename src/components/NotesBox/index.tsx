import React from 'react';
import './styles.css'

interface NoteBoxProps {
    title: string;
    text: string;
  }

const NoteBox: React.FC<NoteBoxProps> = (props) => {
    return (
        <li className="box">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </li>
    );
}

export default NoteBox;
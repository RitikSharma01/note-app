import React from "react";
import DeleteIcon from "../../assets/delete.png";
import "./Note.css";

function Note(props) {
  {
    text: "bbsjbk";
    time: "2:12 AM";
    color: "red";
  }
  // console.log(props.note.id);
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        placeholder={"Type Your Notes Here"}
        defaultValue={props.note.text}
      ></textarea>
      <div className="note_footer">
        <p>{props.note.time}</p>
        <img
          className="DeleteIcon"
          src={DeleteIcon}
          alt="Delete key"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}
export default Note;

import NoteContainer from "./Component/NoteContainer/NoteContainer";
import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const d = new Date().toLocaleString();
  const [notes, setNotes] = useState([
    // {
    //   color: "#fec971",
    //   time: d,
    //   text: "Ritik is building a react-note app",
    // },
    // {
    //   color: "#00d4fe",
    //   time: d,
    //   text: "Ritik is building a react-note app",
    // },
    // {
    //   color: "#b693fd",
    //   time: d,
    //   text: "Ritik is building a react-note app",
    // },
  ]);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  const newNote = (color) => {
    setNotes([...notes, { color: color, time: d, text: "", id: uuidv4() }]);
  };
  return (
    <div className="App">
      <Sidebar addNote={newNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
};
export default App;
 
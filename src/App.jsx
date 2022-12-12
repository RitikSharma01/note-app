import NoteContainer from "./Component/NoteContainer/NoteContainer";
import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const d = new Date().toLocaleString();
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("note-app")) || []
  );
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  const newNote = (color) => {
    setNotes([...notes, { color: color, time: d, text: "", id: uuidv4() }]);
  };
  useEffect(() => {
    localStorage.setItem("note-app", JSON.stringify(notes));
  }, [notes]);
  const updateText = (text, id) => {
    const tempNote = [...notes];
    const index = tempNote.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNote[index].text = text;

    setNotes(tempNote);
  };
  return (
    <div className="App">
      <Sidebar addNote={newNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
};
export default App;

import React, { useEffect, useState } from "react";
import { addNote, getNotes } from "../../utils/storage";
import "./NotesArea.css"

function NotesArea({ group }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");


  useEffect(() => {
    if (group) {
      setNotes(getNotes(group.id));
    }
  }, [group]);


  const handleAdd = () => {
    if (!text.trim() || !group) return;
    addNote(group.id, text);
    setText('');
    setNotes(getNotes(group.id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <div className="group-avatar"
        style={{ background: group.color || "#0056b3" }}
        >
          {group.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        {group.name}
      </div>

       {/* Scrollable Notes */}
      <div className="notes-list">
        {notes.map((n) => (
          <div key={n.id} className="note">
            <p className="note-text">{n.content}</p>
            <small  className="note-time">
              {new Date(n.updatedAt).toLocaleDateString()}{" "}
              {new Date(n.updatedAt).toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>
      
      <div className="note-input">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter your text here..."
        />
        <button className={text ? "sendActive" : "send"} onClick={handleAdd} disabled={!text.trim()}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default NotesArea;




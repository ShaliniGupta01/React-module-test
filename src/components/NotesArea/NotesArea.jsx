import React, { useState, useEffect } from "react";
import { addNote, getNotes } from "../../utils/storage";
import "./NotesArea.css";

function NotesArea({ group }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setNotes(getNotes(group.id));
  }, [group]);

  const handleAdd = () => {
    if (!text.trim()) return;
    addNote(group.id, text);
    setText("");
    setNotes(getNotes(group.id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <div
          className="header-avatar"
          style={{ backgroundColor: group.color || "#4a90e2" }}
        >
          {group.name.charAt(0)}
        </div>
        <h2>{group.name}</h2>
      </div>

      <div className="notes-list">
        {notes.map((n) => (
          <div key={n.id} className="note">
            <p>{n.content}</p>
            <small>
              {new Date(n.updatedAt).toLocaleDateString()}{" "}
              {new Date(n.updatedAt).toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>

      <div className="input-box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter your note..."
        />
        <button
          className={text ? "send-btn active" : "send-btn"}
          onClick={handleAdd}
          disabled={!text.trim()}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default NotesArea;

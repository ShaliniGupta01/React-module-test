import React, { useState, useRef, useEffect } from "react";
import { addGroup, getGroups } from "../../utils/storage";
import "./NewGroupPopup.css";

const colors = [
  "#d17bff",
  "#f18fb0",
  "#f16d6d",
  "#58c9b9",
  "#ffa559",
  "#2f27ce",
];

function NewGroupPopup({ onClose }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleCreate = () => {
    if (groupName.trim().length < 2) {
      alert("Group name must be at least 2 characters.");
      return;
    }
    const existing = getGroups();
    if (
      existing.find((g) => g.name.toLowerCase() === groupName.toLowerCase())
    ) {
      alert("Group already exists!");
      return;
    }
    addGroup(groupName, selectedColor);
    onClose();
    window.location.reload(); // refresh sidebar
  };

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <h3 className="popup-title">Create New Group</h3>

        <div className="field">
          <label className="label">Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            className="input"
          />
        </div>

        <div className="field">
          <label className="label">Choose colour</label>
          <div className="colors">
            {colors.map((c) => (
              <div
                key={c}
                className={`color-circle ${
                  selectedColor === c ? "selected" : ""
                }`}
                style={{ background: c }}
                onClick={() => setSelectedColor(c)}
              />
            ))}
          </div>
        </div>

        <div className="actions">
          <button className="create-btn" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewGroupPopup;

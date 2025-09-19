import React, { useEffect, useState } from "react";
import { getGroups } from "../../utils/storage";
import "./GroupsList.css";

function GroupsList({ onSelectGroup }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(getGroups());
  }, []);

  return (
    <div className="groups-list">
      {groups.map((g) => (
        <div
          key={g.id}
          className="group-item"
          onClick={() => onSelectGroup(g)}
        >
          <div
            className="group-avatar"
            style={{ backgroundColor: g.color || "#4a90e2" }}
          >
            {g.name.charAt(0).toUpperCase()}
          </div>
          <span>{g.name}</span>
        </div>
      ))}
    </div>
  );
}

export default GroupsList;

import React, { useEffect, useState } from "react";
import { getGroups , getInitials} from "../../utils/storage";
import "./GroupsList.css";

function GroupsList({ onSelectGroup }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(getGroups());
  }, []);

  return (
    <div className="groups-list">
      {groups.map((g, idx) => (
        <div
          key={g.id || idx}
          className="group-item"
          onClick={() => onSelectGroup(g)}
        >
          {/* Circle with chosen color */}
          <div
            className="group-avatar"
            style={{ backgroundColor: g.color || "#4a90e2" }}
          >
            {getInitials(g.name)}
          </div>

          {/* Group Name */}
          <span className="group-name">{g.name}</span>
        </div>
       
      ))}
    </div>
  );
}

export default GroupsList;



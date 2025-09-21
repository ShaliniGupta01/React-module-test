import React, { useState } from "react";
import GroupsList from "../components/GroupsList/GroupsList";
import NotesArea from "../components/NotesArea/NotesArea";
import NewGroupPopup from "../components/NewGroupPopup/NewGroupPopup";
import "./Home.css";
import homeImage from "../assets/Home-Image.png";

function Home() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="logo">Pocket Notes</h1>
        <GroupsList onSelectGroup={setSelectedGroup} />
        <button className="add-btn" onClick={() => setShowPopup(true)}>
          +
        </button>
      </div>

      {/* Notes Area */}
      <div className="notes-area">
        {selectedGroup ? (
          <NotesArea group={selectedGroup} />
        ) : (
          <div className="welcome">
            <img src={homeImage} alt="Pocket Notes" className="welcome-img" />
            <h1 className="name">Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online.<br/> 
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
            <small className="encrypt">🔒end-to-end encrypted</small>
          </div>
        )}
      </div>

      {/* Popup */}
      {showPopup && <NewGroupPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Home;

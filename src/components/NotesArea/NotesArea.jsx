// // import React, { useEffect, useState } from "react";
// // import { addNote, getNotes } from "../../utils/storage";
// // import "./NotesArea.css";
// // import { AiOutlineClockCircle } from "react-icons/ai";

// // function NotesArea({ group }) {
// //   const [notes, setNotes] = useState([]);
// //   const [text, setText] = useState("");

// //   useEffect(() => {
// //     if (group) {
// //       setNotes(getNotes(group.id));
// //     }
// //   }, [group]);

// //   const handleAdd = () => {
// //     if (!text.trim() || !group) return;
// //     addNote(group.id, text);
// //     setText("");
// //     setNotes(getNotes(group.id));
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === "Enter" && !e.shiftKey) {
// //       e.preventDefault();
// //       handleAdd();
// //     }
// //   };

// //   // Format date: "9 Mar 2023"
// //   const formatDate = (dateStr) => {
// //     const d = new Date(dateStr);
// //     const day = d.getDate();
// //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
// //                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //     const month = monthNames[d.getMonth()];
// //     const year = d.getFullYear();
// //     return `${day} ${month} ${year}`;
// //   };

// //   // Format time: "10:10 AM"
// //   const formatTime = (dateStr) => {
// //     const d = new Date(dateStr);
// //     let hours = d.getHours();
// //     const minutes = d.getMinutes().toString().padStart(2, "0");
// //     const ampm = hours >= 12 ? "PM" : "AM";
// //     hours = hours % 12 || 12;
// //     return `${hours}:${minutes} ${ampm}`;
// //   };

// //   return (
// //     <div className="notes">
// //       {/* Notes Header */}
// //       <div className="notes-header">
// //         <div
// //           className="group-avatar"
// //           style={{ background: group?.color || "#0056b3" }}
// //         >
// //           {group?.name
// //             ?.split(" ")
// //             .map((w) => w[0])
// //             .join("")
// //             .toUpperCase()
// //             .slice(0, 2)}
// //         </div>
// //         {group?.name}
// //       </div>

// //       {/* Notes List */}
// //       <div className="notes-list">
// //         {notes.map((n) => (
// //           <div key={n.id} className="note">
// //             <p className="note-text">{n.content}</p>
// //             <small className="note-time">
// //               {formatDate(n.updatedAt)}
// //               <AiOutlineClockCircle className="small-clock" />
// //               {formatTime(n.updatedAt)}
// //             </small>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Note Input */}
// //       <div className="note-input">
// //         <textarea
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //           onKeyDown={handleKeyPress}
// //           placeholder="Enter your text here..."
// //         />
// //         <button
// //           className={text.trim() ? "sendActive" : "send"}
// //           onClick={handleAdd}
// //           disabled={!text.trim()}
// //         >
// //           ➤
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default NotesArea;


// import React, { useEffect, useState } from "react";
// import { addNote, getNotes } from "../../utils/storage";
// import "./NotesArea.css";
// import { AiOutlineClockCircle } from "react-icons/ai";

// function NotesArea({ group, onBack }) {
//   const [notes, setNotes] = useState([]);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     if (group) {
//       setNotes(getNotes(group.id));
//     }
//   }, [group]);

//   const handleAdd = () => {
//     if (!text.trim() || !group) return;
//     addNote(group.id, text);
//     setText("");
//     setNotes(getNotes(group.id));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleAdd();
//     }
//   };

//   // Format date: "9 Mar 2023"
//   const formatDate = (dateStr) => {
//     const d = new Date(dateStr);
//     const day = d.getDate();
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const month = monthNames[d.getMonth()];
//     const year = d.getFullYear();
//     return `${day} ${month} ${year}`;
//   };

//   // Format time: "10:10 AM"
//   const formatTime = (dateStr) => {
//     const d = new Date(dateStr);
//     let hours = d.getHours();
//     const minutes = d.getMinutes().toString().padStart(2, "0");
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   return (
//     <div className="notes">
//       {/* Notes Header */}
//       <div className="notes-header">
//         {/* Back button: sirf mobile view ke liye */}
//         <button className="back-btn" onClick={onBack}>←</button>

//         <div
//           className="group-avatar"
//           style={{ background: group?.color || "#0056b3" }}
//         >
//           {group?.name
//             ?.split(" ")
//             .map((w) => w[0])
//             .join("")
//             .toUpperCase()
//             .slice(0, 2)}
//         </div>
//         <h3>{group?.name}</h3>
//       </div>

//       {/* Notes List */}
//       <div className="notes-list">
//         {notes.map((n) => (
//           <div key={n.id} className="note">
//             <p className="note-text">{n.content}</p>
//             <small className="note-time">
//               {formatDate(n.updatedAt)}
//               <AiOutlineClockCircle className="small-clock" />
//               {formatTime(n.updatedAt)}
//             </small>
//           </div>
//         ))}
//       </div>

//       {/* Note Input */}
//       <div className="note-input">
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Enter your text here..."
//         />
//         <button
//           className={text.trim() ? "sendActive" : "send"}
//           onClick={handleAdd}
//           disabled={!text.trim()}
//         >
//           ➤
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NotesArea;


import React, { useEffect, useState } from "react";
import { addNote, getNotes } from "../../utils/storage";
import "./NotesArea.css";
import { AiOutlineClockCircle } from "react-icons/ai";

function NotesArea({ group, onBack }) {
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
    setText("");
    setNotes(getNotes(group.id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = d.getDate();
    const monthNames = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    return `${day} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  };

  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="notes">
      {/* Header */}
      <div className="notes-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <div
          className="group-avatar"
          style={{ background: group?.color || "#0056b3" }}
        >
          {group?.name
            ?.split(" ")
            .map((w) => w[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <span>{group?.name}</span>
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {notes.map((n) => (
          <div key={n.id} className="note">
            <p className="note-text">{n.content}</p>
            <small className="note-time">
              {formatDate(n.updatedAt)}
              <AiOutlineClockCircle className="small-clock" />
              {formatTime(n.updatedAt)}
            </small>
          </div>
        ))}
      </div>

      {/* Note Input */}
      <div className="note-input">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter your text here..."
        />
        <button
          className={text.trim() ? "sendActive" : "send"}
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

import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [{ "label": "cottage", "value": "cottagecore" }, { "label": "yum", "value": "yummy" }, { "label": "notSharing", "value": "I'm not sharing!" }];
const [boardName ,setName]=useState("no boards yet!");
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map((board) => (
               <option key = {board.value} value={board.value}>{board.label}</option>
            ))}
         </select>
         <p>Saved to {boardName}!</p>
      </div>
   );
}

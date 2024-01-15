// import React, { useState } from "react";
// import "./CSS/EditArea.css";
// export default function EditArea() {
//   //const [] = useState([""])
//   var list = ["h"];
//   return (
//     <>
//       <div className="Canvas">
//         <div className="CanvasArea"></div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function EditArea() {
  return (
    <div>
      <button onClick={addTextarea}>Add Textarea</button>

      {/* Render the textareas from the state */}
      {textareas.map((textarea, index) => (
        <div key={index}>{textarea}</div>
      ))}
    </div>
  );
}

// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; // Correct the filename

function ParentComponent() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <ChildComponent setAlertVisibility={setAlertVisibility} />
      {alertVisible && (
        <div style={{ padding: "10px", backgroundColor: "yellow" }}>
          Alert is visible!
        </div>
      )}
      {/* Other components and JSX */}
    </>
  );
}

export default ParentComponent;

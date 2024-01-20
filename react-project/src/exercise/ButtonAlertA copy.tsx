import React, { ReactNode, useState } from "react";
import CreateButtonCopy from "./ButtonAlertB copy";

// ButtonAlertA.tsx

interface CloseAlert {
  visible?: boolean;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateAlertCopy({ visible, setAlertVisible }: CloseAlert) {
  const handleClose = () => {
    console.log(visible);
    if (visible) {
      setAlertVisible(false);
    } else {
      console.log("Already displayed.");
    }
  };

  return (
    <>
      {visible && (
        <div
          className={`alert alert-primary alert-dismissible ${
            visible ? "show" : "fade"
          }`}
          role="alert"
        >
          Alert
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
      )}
    </>
  );
}

export default CreateAlertCopy;

/*
interface CloseAlert {
  visible?: boolean;
  setAlertvisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateAlertCopy({ visible, setAlertvisible }: CloseAlert) {
  [visible, setAlertvisible] = useState(true);

  const handleClose = () => {
    console.log(visible);
    if (visible) {
      setAlertvisible(false);
    } else {
      console.log("Already displayed.");
    }
  };

  return (
    <>
      {visible && (
        <div
          className={`alert alert-primary alert-dismissible ${
            visible ? "show" : "fade"
          }`}
          role="alert"
        >
          Alert
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
      )}
    </>
  );
}

export default CreateAlertCopy;
*/

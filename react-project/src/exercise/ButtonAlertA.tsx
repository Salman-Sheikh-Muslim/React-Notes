import React, { ReactNode, useState } from "react";
import CreateButton from "./ButtonAlertB";

interface CloseAlert {
  visible: boolean;
  onClose: () => void;
}

function CreateAlert({ visible, onClose }: CloseAlert) {
  console.log(" A visible = " + visible + " , onClose = " + onClose);
  const handleClose = () => {
    console.log("A - X Button Clicked \n Function Called handleCose");

    if (visible) {
      console.log("if - A visible = " + visible + " , onClose = " + onClose);
      onClose();
    } else {
      console.log("else - A visible = " + visible + " , onClose = " + onClose);

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

export default CreateAlert;

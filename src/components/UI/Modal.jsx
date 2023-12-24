import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "", onClose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    
    const modal = dialogRef.current;

    if (open) {
      modal.showModal();
    }

    // clean up function will only run when the component is about to re-render
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;

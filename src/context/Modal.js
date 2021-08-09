import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from './ModalContext';

const Modal = () => {
  let { modalContent, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div
        className="modalRoot"
      >
        
          {modalContent}
        
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
}

export default Modal;
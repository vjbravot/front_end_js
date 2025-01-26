import ReactDom from "react-dom";
//import "./Modal.css";

function Modal({ children, onClose }) {
    return ReactDom.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) =>e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
    return (
        <div className="app__modal">
            <div className="app__modal-header">
                <h5 className="heading">Dialog</h5>
            </div>
            <button className="app__modal-close" onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="app__modal-content">
                Are you sure you want to delete the item?
            </div>
            <div className="app__modal-actions">
                <div className="actions-container">
                    <button className="delete-btn" onClick={() => setIsOpen(false)}>
                        Delete
                    </button>
                    <button
                        className="cancel-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
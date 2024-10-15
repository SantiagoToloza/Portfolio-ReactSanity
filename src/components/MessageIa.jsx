import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import Modal from './Modal';
const MessageIa = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        console.log("haciendo click")
        console.log(isOpen)
    };

    return (
        <div>
            <div onClick={toggleModal} className="app__message">
                <div>
                    <FiMessageSquare className='message-icon' />
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>


    );
};

export default MessageIa;

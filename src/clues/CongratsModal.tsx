import React, { useEffect, useState } from 'react';
import Modal, { ModalProps } from '../components/Modal';
export interface CongratsModalProps {
    onClose: () => void;
    step?: number;
}

export default function CongratsModal({
    onClose,
    step,
}: CongratsModalProps) {

    const [padlockClasses, setPadlockClasses] = useState("padlock");

    useEffect( () => {
        setTimeout( () => {
            setPadlockClasses("padlock unlock");
            console.log(padlockClasses);
        }, 500);
    }, []);


    return (
        <Modal
            onClose={onClose}
        >
            <div >
                <div className="padlock-container">
                    <div className={padlockClasses}>
                    <div className="keyhole" />
                    </div>
                </div>
                <h1>Congrats!</h1>
                <p>You've made it past this level.</p>
                <a href={`/clue${(step || 0)+1}`} className="modalButton">
                    Go on to the next clue
                </a>
            </div>
        </Modal>
    );
}
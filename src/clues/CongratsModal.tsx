import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { Link } from "react-router-dom";

export interface CongratsModalProps {
    onClose: () => void;
    step?: number;
}

export default function CongratsModal({
    onClose,
    step,
}: CongratsModalProps) {

    const [padlockClasses, setPadlockClasses] = useState("padlock");
    const success = ( (step || 0) + 1 > 10);
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
                { !success && (
                    <Link to={`/clue${(step || 0)+1}`} className="modal-button">
                        Go on to the next clue
                    </Link>
                    )
                }
                {success && <Link to={`/success`} className="modal-button">
                    Go on to see how you've impacted the world
                    </Link>
                }
            </div>
        </Modal>
    );
}
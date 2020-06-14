import React, { useEffect, useState } from 'react';
import Modal, { ModalProps } from '../components/Modal';

export default function LockedModal({
    onClose
}: ModalProps) {

    return (
        <Modal
            onClose={onClose}
        >
            <div >
                <h1>Sorry!</h1>
                <p>This level is locked. Please unlock the next clue.</p>
            </div>
        </Modal>
    );
}
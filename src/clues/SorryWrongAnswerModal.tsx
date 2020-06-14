import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Modal, { ModalProps } from '../components/Modal';


export function mountSorryWrongAnswer(props: Partial<ModalProps>) {
    const mount = document.createElement('div');
    document.body.appendChild(mount);
    const unmount = () => {
      ReactDom.unmountComponentAtNode(mount);
      document.body.removeChild(mount);
    };
  
    ReactDom.render(
      <SorryWrongAnswerModal onClose={unmount} {...props} />,
      mount
    );
    return unmount;
  }

  
export default function SorryWrongAnswerModal({
    onClose
}: ModalProps) {

    return (
        <Modal
            onClose={onClose}
        >
            <div >
                <h1>Sorry!</h1>
                <p>That is not the correct answer. Please try again.</p>
            </div>
        </Modal>
    );
}
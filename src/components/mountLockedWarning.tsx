import React from 'react';
import ReactDom from 'react-dom';

import LockedModal from '../clues/LockedModal';

import {ModalProps} from './Modal';

export default function mountLockedModal(props: Partial<ModalProps>) {
  const mount = document.createElement('div');
  document.body.appendChild(mount);
  const unmount = () => {
    ReactDom.unmountComponentAtNode(mount);
    document.body.removeChild(mount);
  };

  ReactDom.render(
    <LockedModal onClose={unmount} {...props} />,
    mount
  );
  return unmount;
}

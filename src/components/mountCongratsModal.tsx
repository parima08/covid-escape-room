import React from 'react';
import ReactDom from 'react-dom';

import CongratsModal, {CongratsModalProps} from '../clues/CongratsModal';

export default function mountCongratsModal(props: Partial<CongratsModalProps>) {
  const mount = document.createElement('div');
  document.body.appendChild(mount);
  const unmount = () => {
    ReactDom.unmountComponentAtNode(mount);
    document.body.removeChild(mount);
  };

  ReactDom.render(
    <CongratsModal onClose={unmount} {...props} />,
    mount
  );
  return unmount;
}

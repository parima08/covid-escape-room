import  React from 'react';


export interface ModalProps{
  children?: React.ReactNode;
  className?: string;
  onClose?: (event?: any) => any;
  screenClassName?: string;
  style?: React.CSSProperties;
}

const stopPropagation = event => {
  event && event.stopPropagation && event.stopPropagation();
};

export default function Modal({
  children,
  onClose,
  style,
}: ModalProps){
  const handleClickScreen = event => {
    event.stopPropagation();
    onClose && onClose(event);
  };
  return (
    <div className='screen' onClick={handleClickScreen}>
      <div className='panel' onClick={stopPropagation} style={style}>
        {children}
      </div>
    </div>
  );
};


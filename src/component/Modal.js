import React from 'react';
import XMask from '../asset/logo/XMask';
export default function Modal(props) {
  const { children, className, show } = props;
  return (
    <div
      className={`h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 ${
        show ? ' block ' : ' hidden '
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ModalHeader(props) {
  const { children, onClose, line, className } = props;
  return (
    <div className={`flex border-xl bg-white   ${className}`}>
      <div className="flex justify-between items-center p-10 ">
        {children}
        <XMask className="text-[900px]" onClick={onClose} />
      </div>

      <div
        className={`w-full ${line ? ' block ' : ' hidden '}`}
        style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
      />
    </div>
  );
}

export { ModalHeader };

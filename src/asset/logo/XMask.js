import React from 'react';

export default function XMask(props) {
  const {onClick} = props
  return (
    <div role="button" className="h-[30px] w-[30px] mx-5 fixed right-0 z-[1]" onClick={onClick}>
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 text-black"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );
}
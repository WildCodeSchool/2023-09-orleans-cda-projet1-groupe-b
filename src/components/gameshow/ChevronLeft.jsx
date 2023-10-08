import React from 'react';
import { ReactSVG } from 'react-svg';

export default function ChevronLeft({ handleClickPrev }) {
  return (
    <>
      <button
        onClick={handleClickPrev}
        className="bg-primary/[.25] flex items-center justify-center w-10 h-20 rounded backdrop-blur-sm"
      >
        <ReactSVG src="/public/images/chevron-left.svg" />
      </button>
    </>
  );
}

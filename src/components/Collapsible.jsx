import React from 'react';
import '../App.css';

export default function Collapsible({
  isOpenPlatform,
  setIsOpenPlatform,
  isOpenGenres,
  setIsOpenGenres,
}) {
  return (
    <>
      <div className="ml-3 h-40 w-full bg-secondary p-4 pl-6">
        Ça déroule...
      </div>
    </>
  );
}

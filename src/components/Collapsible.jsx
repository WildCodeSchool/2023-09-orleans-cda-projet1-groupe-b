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
      <div className="h-40 w-full bg-secondary ml-3 pl-6 p-4">
        Ça déroule...
      </div>
    </>
  );
}

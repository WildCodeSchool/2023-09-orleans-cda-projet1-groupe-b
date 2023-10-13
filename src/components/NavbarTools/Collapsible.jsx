import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Collapsible({ children }) {
  return (
    <>
      <div className="ml-3 w-full p-4 pl-6">
        <ul className=" flex flex-col bg-secondary">{children}</ul>
      </div>
    </>
  );
}

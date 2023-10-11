import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function CollapsibleGenres({
  isOpenGenres,
  setIsOpenGenres,
  genres,
}) {
  return (
    <>
      <div className="ml-3 w-full p-4 pl-6">
        <ul className=" flex flex-col bg-secondary">
          {genres.map((genre, index) => (
            <Link className="py-[4px] font-text text-light" key={index}>
              {genre.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

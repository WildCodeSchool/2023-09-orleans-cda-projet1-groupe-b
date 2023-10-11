import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function CollapsiblePlatforms({
  isOpenPlatform,
  setIsOpenPlatform,
  platforms,
}) {
  return (
    <>
      <div className="ml-3 w-full p-4 pl-6">
        <ul className=" flex flex-col bg-secondary">
          {platforms.map((platform, index) => (
            <Link className="py-[4px] font-text text-light" key={index}>
              {platform.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

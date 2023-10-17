import React from 'react';

export default function Cube3D() {
  return (
    <div className="flex h-[29rem] w-[33rem] items-center justify-center pt-5">
      <div className="cube-container mr-10 flex h-full w-full items-center justify-center bg-[url('/images/BgCube.svg')] bg-center">
        <div className="cube h-52 w-52">
          <div className="face front absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img src="images/Cat1.webp" alt="Image 1" />
          </div>
          <div className="face back absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img src="images/Cat5.webp" alt="Image 2" />
          </div>
          <div className="face right absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video autoPlay loop muted>
              <source src="images/Sonic.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="face left absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video autoPlay loop muted>
              <source src="images/Fzero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="face top absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img src="images/Cat3.webp" alt="Image 3" />
          </div>
          <div className="face bottom absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img src="images/Cat4.webp" alt="Image 4" />
          </div>
        </div>
      </div>
      //{' '}
    </div>
  );
}

import React from 'react';

export default function Cube3D({ screenshots, movies }) {
  return (
    <div className="flex h-[29rem] w-[33rem] items-center justify-center pt-5">
      <div className="cube-container mr-5 flex h-full w-full items-center justify-center bg-[url('/images/BgCube.svg')] bg-center">
        <div className="cube h-52 w-52">
          <div className="face front absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[0].image}
              alt="Image 1"
              className="h-full"
            />
          </div>
          <div className="face back absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[2].image}
              alt="Image 2"
              className="h-full"
            />
          </div>
          <div className="face right absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video autoPlay loop muted>
              <source
                src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
                type="video/mp4"
                className="h-full"
              />
              <source src="images/Sonic.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="face left absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video autoPlay loop muted>
              <source src={movies?.results[0]?.data.max} type="video/mp4" />
              <source src="images/Sonic.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="face top absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[3].image}
              alt="Image 3"
              className="h-full"
            />
          </div>
          <div className="face bottom absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[5].image}
              alt="Image 4"
              className="h-full"
            />
          </div>
        </div>
      </div>
      //{' '}
    </div>
  );
}

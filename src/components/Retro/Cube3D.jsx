export default function Cube3D({ screenshots, movies }) {
  return (
    <div className="flex items-center justify-center pt-5 md:h-[29rem] md:w-[33rem]">
      <div className="cube-container mr-5 flex h-full w-full items-center justify-center bg-[url('/images/BgCube.svg')] bg-center">
        <div className="preserve-3d hover:pause-animation h-52 w-52 animate-spin">
          <div className="face cube-front absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[0].image}
              alt="Image 1"
              className="h-full"
            />
          </div>
          <div className="cube-back absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[0].image}
              alt="Image 2"
              className="h-full"
            />
          </div>
          <div className="cube-right absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video
              autoPlay
              loop
              muted
              className="h-full"
              poster="/images/GPLogodark2.webp"
            >
              <source src={movies?.results[0]?.data?.max} type="video/mp4" />
            </video>
          </div>
          <div className="cube-left absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <video
              autoPlay
              loop
              muted
              className="h-full"
              poster="/images/GPLogodark2.webp"
            >
              <source src={movies?.results[3]?.data?.max} type="video/mp4" />
            </video>
          </div>
          <div className="cube-top absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[3].image}
              alt="Image 3"
              className="h-full"
            />
          </div>
          <div className="cube-bottom absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <img
              src={screenshots?.results?.[5].image}
              alt="Image 4"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

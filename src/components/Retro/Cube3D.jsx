import { Link } from 'react-router-dom';

export default function Cube3D({ screenshots, gameId }) {
  return (
    <div className="flex items-center justify-center pt-5 md:h-[29rem] md:w-[33rem]">
      <div className="cube-container mr-5 flex h-full w-full items-center justify-center bg-[url('/images/bg-cube.svg')] bg-center">
        <div className="preserve-3d hover:pause-animation h-52 w-52 animate-spin">
          <div className="face cube-front absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={`/games/${gameId}`}>
              <img
                src={
                  screenshots?.results?.[0]?.image || '/images/gp-logodark.webp'
                }
                alt="Image 1"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="cube-back absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={`/games/${gameId}`}>
              <img
                src={
                  screenshots?.results?.[1]?.image || '/images/gp-logodark.webp'
                }
                alt="Image 1"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="cube-right absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={'/about-the-team'}>
              <img
                src={'/images/gp-logodark.webp'}
                alt="Image 1"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="cube-left absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={`/games/${gameId}`}>
              <img
                src={
                  screenshots?.results?.[2]?.image || '/images/gp-logodark.webp'
                }
                alt="Image 2"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="cube-top absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={`/games/${gameId}`}>
              <img
                src={
                  screenshots?.results?.[3]?.image || '/images/gp-logodark.webp'
                }
                alt="Image 3"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div className="cube-bottom absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid border-gray-400 hover:border-primary">
            <Link className="h-full w-full" to={`/games/${gameId}`}>
              <img
                src={
                  screenshots?.results?.[4]?.image || '/images/gp-logodark.webp'
                }
                alt="Image 4"
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

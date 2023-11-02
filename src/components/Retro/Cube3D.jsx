import { useNavigate } from 'react-router-dom';

export default function Cube3D({ screenshots, movies, game }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/about-the-team');
  };

  const handleImageClick = () => {
    navigate(`/games/${game.id}`);
  };

  const handleFrontClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  // links en priorité

  return (
    <div className="flex items-center justify-center pt-5 md:h-[29rem] md:w-[33rem]">
      <div className="cube-container mr-5 flex h-full w-full items-center justify-center bg-[url('/images/BgCube.svg')] bg-center">
        <div className="preserve-3d hover:pause-animation h-52 w-52 animate-spin">
          <div className="face cube-front border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <img
              src={
                screenshots?.results?.[0]?.image || '/images/GPLogodark2.webp'
              }
              alt="Image 1"
              className="h-full w-full"
              onClick={handleFrontClick}
            />
          </div>
          <div className="cube-back border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <img
              src={
                screenshots?.results?.[1]?.image || '/images/GPLogodark2.webp'
              }
              alt="Image 1"
              className="h-full w-full"
              onClick={handleImageClick}
            />
          </div>
          <div className="cube-right border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <video
              autoPlay
              loop
              muted
              className="h-full w-full"
              poster="/images/GPLogodark2.webp"
              onClick={handleLogoClick}
            >
              <source src={movies?.results[0]?.data?.max} type="video/mp4" />
            </video>
          </div>
          <div className="cube-left border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <img
              src={
                screenshots?.results?.[2]?.image || '/images/GPLogodark2.webp'
              }
              alt="Image 2"
              className="h-full w-full"
              onClick={handleImageClick}
            />
          </div>
          <div className="cube-top border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <img
              src={
                screenshots?.results?.[3]?.image || '/images/GPLogodark2.webp'
              }
              alt="Image 3"
              className="h-full w-full"
              onClick={handleImageClick}
            />
          </div>
          <div className="cube-bottom border-gray-400 absolute flex h-[200px] w-[200px] items-center justify-center border-2 border-solid hover:border-primary">
            <img
              src={
                screenshots?.results?.[5]?.image || '/images/GPLogodark2.webp'
              }
              alt="Image 4"
              className="h-full w-full"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

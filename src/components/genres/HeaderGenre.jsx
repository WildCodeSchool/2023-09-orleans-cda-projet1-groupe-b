export default function HeaderGenre({ currentGame }) {
  return (
    <>
      <div className="relative">
        <div className="absolute right-32 h-full w-full">
          <div className="genre-mask z-50 h-[55vw] w-[80vw] bg-dark/60 ">
            <img
              src={currentGame.background_image}
              alt={currentGame.name}
              className="h-full w-full object-cover opacity-75 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

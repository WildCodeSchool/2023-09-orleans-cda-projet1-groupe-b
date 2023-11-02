export default function HeaderHome({ imageHeader, isLoaded }) {
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="image-mask h-full w-full">
          <div className="absolute z-50 h-full w-full bg-gradient-to-r from-dark to-dark/0"></div>
          {isLoaded ? (
            <div className="h-full w-full">
              <img
                src={imageHeader.background_image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </>
  );
}

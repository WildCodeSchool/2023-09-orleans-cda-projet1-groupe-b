export default function Error404() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full flex-col justify-center">
      <div className="flex flex-row items-center justify-center">
        <h1 className="mt-5 h-14 text-center font-title text-4xl text-light">
          Error 404 - The page wasn{"'"}t found
        </h1>
        <span>
          <img
            width="30"
            className="mx-3"
            src={`${import.meta.env.BASE_URL}sad.png`}
            alt="sad"
          />
        </span>
      </div>
      <div className="flex justify-center">
        <img
          className="w-52"
          src={`${import.meta.env.BASE_URL}link-404.png`}
          alt="404"
        />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function DlcComponent({ dlc, isLoaded }) {
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      {dlc.results && dlc.results.length > 0 ? (
        <div
          className={`mt-5 ${
            dlc.results.length >= 3 ? 'h-[26rem]' : 'h-auto'
          } overflow-auto pb-2`}
        >
          <div className="flex flex-col flex-nowrap gap-3">
            {dlc.results.map((d) => (
              <div
                key={d.id}
                className="container relative overflow-hidden rounded-lg opacity-50 shadow-lg transition duration-150 hover:-translate-y-0.5 hover:opacity-100"
              >
                <Link to={`/games/${d.slug}`}>
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10"></div>
                  <img
                    className="z-0 aspect-[16/9] rounded-lg "
                    src={d.background_image}
                    alt=""
                  />
                  <img
                    className="absolute -left-[50px] -top-[45px] h-[150px]"
                    src="/dlc.png"
                    alt="dlc"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-shadow top-100 z-10 align-top font-bold">
                      {d.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-1">
          <p>There are no other editions or DLC{"'"}s for this game</p>
        </div>
      )}
    </>
  );
}

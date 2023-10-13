import { fetchGameElements } from "../../api/api-fetch";
import dlcURL from "../../api/api-url";
import { useState, useEffect } from "react";

export default function DlcComponent({ gameId }) {
  const [dlc, setDlc] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameElements({
      parameter: dlcURL,
      gameId,
      setter: setDlc,
      property: "results",
      signal,
    });

    return () => controller.abort();
  }, [gameId]);

  return (
    <>
      {dlc.length > 0 ? (
        <div className="overflow-auto h-[26rem] pb-2">
          {dlc.map((d) => (
            <div
              key={d.id}
              className="rightbar relative overflow-hidden opacity-50 hover:opacity-100 border-black container mt-5 rounded-lg border hover:-translate-y-0.5 transition duration-150"
            >
              <img
                className="z-0 aspect-[16/9] rounded-lg "
                src={d.background_image}
                alt=""
              />
              <img
                className="absolute -top-[45px] -left-[50px] h-[150px]"
                src="/src/assets/dlc.png"
                alt="dlc"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="dlcText z-10 font-bold align-top top-100">
                  {d.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-1">
          <p>There are no other editions or DLCs for this game</p>
        </div>
      )}
    </>
  );
}

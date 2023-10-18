export default function DlcComponent({ dlc, isLoaded }) {
  if (!isLoaded) {
    return null;
  } else {
    return (
      <>
        {dlc.results && dlc.results.length > 0 ? (
          <div className="mt-5 h-[26rem] overflow-auto pb-2 ">
            <div className="flex flex-col flex-nowrap gap-3">
              {dlc.results.map((d) => (
                <div
                  key={d.id}
                  className="rightbar container relative overflow-hidden rounded-lg border border-black opacity-50 transition duration-150 hover:-translate-y-0.5 hover:opacity-100"
                >
                  <img
                    className="z-0 aspect-[16/9] rounded-lg "
                    src={d.background_image}
                    alt=""
                  />
                  <img
                    className="absolute -left-[50px] -top-[45px] h-[150px]"
                    src="/src/assets/dlc.png"
                    alt="dlc"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="dlcText top-100 z-10 align-top font-bold">
                      {d.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-1">
            <p>There are no other editions or DLCs for this game</p>
          </div>
        )}
      </>
    );
  }
}

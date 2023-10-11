export default function GridCard({ slides }) {
  return (
    <>
      <h1 className="space-x-40 text-dark text-4xl font-title text-center my-20">
        Catalogue
      </h1>
      <div className="w-3/4 m-auto ">
        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
          {slides.map((s, index) => (
            <div
              key={index}
              className="w-80 h-full bg-white border border-primary rounded shadow shadow-indigo-500/50 transition-transform hover:scale-110"
            >
              <img className="rounded-t h-96" src={s} />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

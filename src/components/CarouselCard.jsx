export default function CarouselCard({ s }) {
  return (
    <>
      <div className="flex flex-row w-full border border-primary rounded">
        <div className="w-[31rem]">
          <img className="object-fit w-full h-[36rem] rounded" src={s} alt="" />
        </div>
        <div className="flex flex-col m-4 ">
          <div className="w-[37rem]">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

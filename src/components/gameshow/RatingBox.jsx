import ProgressBar from './ProgressBar';

export default function RatingBox({ game }) {
  return (
    <>
      <div className="h-fit w-fit rounded-lg border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 p-4 py-2 text-start">
        {/* Note générale/nombre d'avis */}
        {game?.rating ? (
          <>
            <p
              className={`border-slate-300 m-3 border-b-2 px-2 pb-4 text-8xl font-bold text-light`}
            >
              {game.rating}
            </p>
            <span className="px-3 text-3xl text-light">
              {game.ratings_count} avis
            </span>
            <ul className=" px-3 pb-5 pt-10 text-3xl text-light">
              <li className="flex items-center gap-2 py-4">
                4 <img src="/images/star.svg" />
                <ProgressBar percents={game.ratings[0].percent} />
              </li>
              <li className="flex items-center gap-2 py-4">
                3 <img src="/images/star.svg" />
                <ProgressBar percents={game.ratings[1].percent} />
              </li>
              <li className="flex items-center gap-2 py-4">
                2 <img src="/images/star.svg" />
                <ProgressBar percents={game.ratings[2].percent} />
              </li>
              <li className="flex items-center gap-2 py-4">
                1 <img src="/images/star.svg" />
                <ProgressBar percents={game.ratings[3].percent} />
              </li>
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

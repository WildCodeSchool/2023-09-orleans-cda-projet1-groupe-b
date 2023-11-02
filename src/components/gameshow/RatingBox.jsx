import Title from '../Title';
import ProgressBar from './ProgressBar';

export default function RatingBox({ game, vote }) {
  if (!game) return null;

  const ratings1 = game.ratings.find((rating) => rating.id === 1);
  const ratings2 = game.ratings.find((rating) => rating.id === 2);
  const ratings3 = game.ratings.find((rating) => rating.id === 3);
  const ratings4 = game.ratings.find((rating) => rating.id === 4);
  const ratings5 = game.ratings.find((rating) => rating.id === 5);

  const nbVotes1 = (ratings1?.count || 0) + (vote === 1 ? 1 : 0);
  const nbVotes2 = (ratings2?.count || 0) + (vote === 2 ? 1 : 0);
  const nbVotes3 = (ratings3?.count || 0) + (vote === 3 ? 1 : 0);
  const nbVotes4 = (ratings4?.count || 0) + (vote === 4 ? 1 : 0);
  const nbVotes5 = (ratings5?.count || 0) + (vote === 5 ? 1 : 0);

  const totalVotes = nbVotes1 + nbVotes2 + nbVotes3 + nbVotes4 + nbVotes5;

  const averagesNotes =
    (nbVotes1 * 1 + nbVotes2 * 2 + nbVotes3 * 3 + nbVotes4 * 4 + nbVotes5 * 5) /
    totalVotes;

  const percent1 = Math.round((nbVotes1 / totalVotes) * 100 * 100) / 100;
  // const percent2 = Math.round(nbVotes2 / totalVotes * 100 * 100) / 100; // adapt to API gradation that doesn't consider id_2 in its json
  const percent3 = Math.round((nbVotes3 / totalVotes) * 100 * 100) / 100;
  const percent4 = Math.round((nbVotes4 / totalVotes) * 100 * 100) / 100;
  const percent5 = Math.round((nbVotes5 / totalVotes) * 100 * 100) / 100;

  return (
    <>
      <div className="mt-1">
        <Title title="Ratings" />
        <div className="h-fit w-fit rounded-lg border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 p-4 py-2 text-start">
          <>
            <p
              className={`m-3 border-b-2 border-slate-300 px-2 pb-4 text-8xl font-bold text-light`}
            >
              {Math.round(averagesNotes * 100) / 100}
            </p>
            {vote ? (
              <span className="px-3 text-3xl text-light">
                {game.ratings_count + 1} avis
              </span>
            ) : (
              <span className="px-3 text-3xl text-light">
                {game.ratings_count} avis
              </span>
            )}
            <ul className=" px-3 pb-5 pt-10 text-3xl text-light">
              <li className="flex items-center gap-2 py-4">
                4 <img src="/images/star.svg" />
                <ProgressBar percents={percent5} />
              </li>
              <li className="flex items-center gap-2 py-4">
                3 <img src="/images/star.svg" />
                <ProgressBar percents={percent4} />
              </li>
              <li className="flex items-center gap-2 py-4">
                2 <img src="/images/star.svg" />
                <ProgressBar percents={percent3} />
              </li>
              <li className="flex items-center gap-2 py-4">
                1 <img src="/images/star.svg" />
                <ProgressBar percents={percent1} />
              </li>
            </ul>
          </>
        </div>
      </div>
    </>
  );
}

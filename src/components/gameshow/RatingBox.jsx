import Title from '../Title';
import { motion } from 'framer-motion';

export default function RatingBox({ game }) {
  console.log(game);

  return (
    <>
      <div className="mt-1">
        <Title title="Ratings" />
        <div className="h-fit w-96 rounded-lg border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 p-4 py-2 text-start">
          <div>
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
                  <motion.div>
                    <li className="flex gap-2 py-4">
                      5 <img src="/images/star.svg" />
                      {/* <ProgressBar caption="5" percents={2} /> */}
                    </li>
                    <li className="flex gap-2 py-4">
                      4 <img src="/images/star.svg" />
                      {/* <ProgressBar caption="4" percents={2} /> */}
                    </li>
                    <li className="flex gap-2 py-4">
                      3 <img src="/images/star.svg" />
                      {/* <ProgressBar caption="3" percents={2} /> */}
                    </li>
                    <li className="flex gap-2 py-4">
                      2 <img src="/images/star.svg" />
                      {/* <ProgressBar caption="2" percents={2} /> */}
                    </li>
                    <li className="flex gap-2 py-4">
                      1 <img src="/images/star.svg" />
                      {/* <ProgressBar caption="1" percents={2} /> */}
                    </li>
                  </motion.div>
                </ul>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {/* <div>notes étoiles</div> */}
        </div>
      </div>
    </>
  );
}

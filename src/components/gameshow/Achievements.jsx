// Importation des composants
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Box from './AchievementTooltip';

export default function Achievements({ trophiesResults, isLoaded }) {
  const [show, setShow] = useState(Array(trophiesResults.length).fill(false));

  return (
    <>
      <h1 className="space-x-40 font-title text-4xl text-light">
        Achievements
      </h1>
      <div className="w-full">
        <div className="grid grid-cols-5 place-items-center gap-1">
          {isLoaded ? (
            trophiesResults &&
            trophiesResults.map((trophy, index) => (
              <div key={trophy.id}>
                <div className="col-span-full text-light">
                  <div>
                    <div className="">
                      <motion.button
                        key={Math.random(index)}
                        className="cursor-default"
                        onHoverStart={() => {
                          const newShow = [...show];
                          newShow[index] = true;
                          setShow(newShow);
                        }}
                        onHoverEnd={() => {
                          const newShow = [...show];
                          newShow[index] = false;
                          setShow(newShow);
                        }}
                      >
                        {show[index] ? (
                          <img
                            className="z-0 m-3 rounded-md border border-primary p-1 transition hover:opacity-20"
                            width="65"
                            src={trophy.image}
                            alt=""
                          />
                        ) : (
                          <img
                            className="z-0 m-3 rounded-md border border-primary p-1"
                            width="65"
                            src={trophy.image}
                            alt=""
                          />
                        )}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {show[index] ? (
                        <Box index={index} trophy={trophy} />
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

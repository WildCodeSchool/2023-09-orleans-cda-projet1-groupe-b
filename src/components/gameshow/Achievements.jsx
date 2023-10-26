// Importation des composants
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Box from './AchievementTooltip';
import Title from '../Title';

export default function Achievements({ trophiesResults, isLoaded }) {
  const trophyNb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [show, setShow] = useState(Array(trophyNb.length).fill(false));

  return (
    <>
      <div className="mt-10">
        <Title title="Achievements" />
        <div className="-mt-14 w-full">
          <div className="grid grid-cols-5 place-items-center gap-1">
            {isLoaded && show ? (
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
      </div>
    </>
  );
}

import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';
import { dlcURL } from '../../api/api-url';
import { useEffect, useState } from 'react';
import ageRating from './AgeRatingLogo';
import { Tooltip } from 'flowbite-react';
import storeLogo from './StoreLogo';
import DlcComponent from './DlcComponent';
import perc2color from '../../utils/MetascoreColor';
import PlatformsList from '../home/PlatformsList';
import nl2br from '../../utils/TextFormatter';
import { Link } from 'react-router-dom';

export default function RightBar({ gameId }) {
  const [game, setGame] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dlc, setDlc] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGameDetails({
      gameId,
      setter: setGame,
      setLoaded: setIsLoaded,
      signal,
    });
    fetchGameElements({
      parameter: dlcURL,
      gameId,
      setter: setDlc,
      setLoaded: setIsLoaded,
      signal,
    });
    return () => controller.abort();
  }, [gameId]);

  const metascoreColor = perc2color(parseInt(game.metacritic));
  const websiteSplitted = (website) => {
    const splitted = website.replaceAll('http', '\nhttp');
    const websiteArray = splitted.split('\n');
    return websiteArray;
  };

  return (
    <>
      <section className="font-text text-light">
        <div className="w-25 rounded-lg border border-primary bg-primary/10 p-4">
          <h3 className={`text-xl font-bold`}>Metascore</h3>
          <div className="flex justify-center">
            <div>
              {isLoaded ? (
                game.metacritic ? (
                  <p
                    style={{ backgroundColor: metascoreColor }}
                    className={`m-3 rounded-lg p-5 text-5xl font-bold`}
                  >
                    {game.metacritic}
                  </p>
                ) : (
                  <p className="m-3 rounded-lg bg-[#9E9E9E] p-5 text-4xl font-bold text-white">
                    N/A
                  </p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 w-full rounded-lg border border-primary bg-primary/10 p-4">
          <h3 className="text-m font-bold">Platforms</h3>
          <div className="flex justify-start">
            <Tooltip
              content={
                isLoaded ? (
                  game.platforms && game.platforms.length > 0 ? (
                    game.platforms.map((pf) => (
                      <div key={pf.platform.id}>
                        <p className="text-light/80">{pf.platform.name}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-light/80">N/A</p>
                  )
                ) : (
                  <p className="text-light/80">Loading...</p>
                )
              }
              className="bg-tertiary/90"
            >
              <div className="flex items-center rounded-md border-none py-2 text-sm transition-all duration-200">
                <PlatformsList game={game} isLoaded={isLoaded} />
              </div>
              <div className="tooltip invisible absolute z-10 inline-block rounded-lg bg-tertiary px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"></div>
            </Tooltip>
          </div>
          <h3 className="text-m mt-3 font-bold">Genres</h3>
          <div>
            {isLoaded ? (
              game.genres && game.genres.length > 0 ? (
                game.genres.map((g) => (
                  <p key={g.id} className="text-light/80">
                    {g.name}
                  </p>
                ))
              ) : (
                <p className="text-light/80">N/A</p>
              )
            ) : (
              <p className="text-light/80">Loading...</p>
            )}
          </div>
          <h3 className="text-m mt-3 font-bold">Release</h3>
          {isLoaded ? (
            game.released ? (
              <p className="text-light/80">{game.released}</p>
            ) : (
              <p className="text-light/80">N/A</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
          <h3 className="text-m mt-3 font-bold">Developer</h3>
          {isLoaded ? (
            game.developers && game.developers.length > 0 ? (
              game.developers.map((dev) => (
                <div key={dev.id}>
                  <p className="text-light/80">{dev.name}</p>
                </div>
              ))
            ) : (
              <p className="text-light/80">N/A</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
          <h3 className="text-m mt-3 font-bold">Editor</h3>
          {isLoaded ? (
            game.publishers && game.publishers.length > 0 ? (
              game.publishers.map((pub) => (
                <p key={pub.id} className="text-light/80">
                  {pub.name}
                </p>
              ))
            ) : (
              <p className="text-light/80">Aucun éditeur disponible</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
          <h3 className="text-m mt-3 font-bold">PEGI Rating</h3>
          <div>
            {isLoaded ? (
              game.esrb_rating != null ? (
                <img
                  className="mt-1 h-16"
                  src={ageRating(game.esrb_rating.name)}
                  alt={game.esrb_rating.name}
                />
              ) : (
                <p className="text-light/80">N/A</p>
              )
            ) : (
              <p className="text-light/80">Loading...</p>
            )}
          </div>
          <div className="my-6 h-[1px] w-full bg-primary/50" />

          <h3 className="text-m mt-3 font-bold">Web site</h3>
          {isLoaded ? (
            game.website && game.website.length > 0 ? (
              websiteSplitted(game.website).map((w, key) => (
                <a
                  key={key}
                  className="text-primary transition hover:text-secondary"
                  href={w}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="... overflow-hidden text-ellipsis">
                    {nl2br(w)}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-light/80">N/A</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
        </div>
        <div className="mt-5 rounded-lg border border-primary bg-primary/10 p-4">
          <h3 className="text-m mt-3 font-bold">Buy {game.name}</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
            {isLoaded ? (
              game.stores && game.stores.length > 0 ? (
                game.stores.map((st) => (
                  <div key={st.id}>
                    <Link to="/">
                      <div className="flex w-full items-center justify-center rounded bg-[#0D4F61] font-bold text-light transition duration-150 hover:-translate-y-0.5 hover:bg-primary">
                        <div className="flex w-full items-center justify-center gap-2 px-4 py-3 text-center transition hover:translate-x-2 hover:invert">
                          {st.store.name}
                          <img
                            className="h-[1.4rem] w-[1.5rem]"
                            src={storeLogo(st.store.name)}
                            alt={st.store.name}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-light/80">No store available</p>
              )
            ) : (
              <p className="text-light/80">Loading...</p>
            )}
          </div>

          <div className="my-6 h-[1px] w-full bg-primary/50" />
          <h3 className="text-m font-bold">
            {`Editions and DLC's ${game.name}`}
          </h3>
          <DlcComponent dlc={dlc} isLoaded={isLoaded} />
        </div>
      </section>
    </>
  );
}

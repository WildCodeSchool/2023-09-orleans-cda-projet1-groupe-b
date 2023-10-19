import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';
import { dlcURL } from '../../api/api-url';
import { useEffect, useState } from 'react';
import ageRating from './AgeRatingLogo';
import { Tooltip } from 'flowbite';
import storeLogo from './StoreLogo';
import platformLogo from './PlatformLogo';
import DlcComponent from './DlcComponent';
import perc2color from './MetascoreColor';

export default function RightBar({ gameId }) {
  const [game, setGame] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dlc, setDlc] = useState([]);
  const [retro, setRetro] = useState([]);
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

  // set the tooltip content element
  const targetEl = document.getElementById('tooltipContent');
  // set the element that trigger the tooltip using hover or click
  const triggerEl = document.getElementById('tooltipButton');
  const options = {
    placement: 'top',
    triggerType: 'hover',
  };
  const tooltip = new Tooltip(targetEl, triggerEl, options);
  const metascoreColor = perc2color(parseInt(game.metacritic));
  return (
    <>
      <section className="font-text text-light">
        <div className="w-25 container rounded-lg border border-primary bg-primary/10 p-4">
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
                  <p className="text-white m-3 rounded-lg bg-[#9E9E9E] p-5 text-4xl font-bold">
                    N/A
                  </p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-25 container mt-5 rounded-lg border border-primary bg-primary/10 p-4">
          <h3 className="text-m font-bold">Platforms</h3>
          <div className="grid">
            <button
              id="tooltipButton"
              data-tooltip-target="tooltip-animation"
              type="button"
              className="flex flex-row"
            >
              {isLoaded ? (
                game.parent_platforms && game.parent_platforms.length > 0 ? (
                  game.parent_platforms.map((ppf) => (
                    <img
                      className="m-auto mt-1 h-6"
                      key={ppf.platform.id}
                      src={platformLogo(ppf.platform.slug)}
                      alt={ppf.platform.slug}
                    />
                  ))
                ) : (
                  <p className="text-light/80">N/A</p>
                )
              ) : (
                <p className="text-light/80">Loading...</p>
              )}
            </button>
            <div
              id="tooltipContent"
              role="tooltip"
              className="tooltip text-white dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg bg-tertiary px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300"
            >
              {isLoaded ? (
                game.platforms && game.platforms.length > 0 ? (
                  game.platforms.map((pf) => (
                    <>
                      <div key={pf.platform.id}>
                        <p className="text-light/80">{pf.platform.name}</p>
                      </div>
                    </>
                  ))
                ) : (
                  <p className="text-light/80">N/A</p>
                )
              ) : (
                <p className="text-light/80">Loading...</p>
              )}
            </div>
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
          <img
            className="mb-5 mt-6"
            src="/separator.png"
            alt="line-separator"
          />
          <h3 className="text-m mt-3 font-bold">Web site</h3>
          {isLoaded ? (
            game.website && game.website.length > 0 ? (
              <a href={game.website} target="_blank" rel="noreferrer">
                <p className="overflow-hidden text-ellipsis text-primary">
                  {game.website}
                </p>
              </a>
            ) : (
              <p className="text-light/80">N/A</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
        </div>
        <div className="w-25 container mt-5 rounded-lg border border-primary bg-primary/10 p-4">
          <h3 className="text-m mt-3 font-bold">Buy {game.name}</h3>
          {isLoaded ? (
            game.stores && game.stores.length > 0 ? (
              game.stores.map((st) => (
                <div key={st.id}>
                  <button className="storeButton my-2 inline-flex w-full items-center justify-center rounded bg-[#0D4F61] text-center font-bold text-light transition duration-150 hover:-translate-y-0.5 hover:bg-primary">
                    <div className="flex w-full flex-row justify-center px-4 py-3 hover:invert">
                      {st.store.name}
                      <img
                        width="25"
                        className="mx-1.5 text-center"
                        src={storeLogo(st.store.name)}
                        alt={st.store.name}
                      />
                    </div>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-light/80">No store available</p>
            )
          ) : (
            <p className="text-light/80">Loading...</p>
          )}
          <img className="my-5" src="/separator.png" alt="separator" />
          <h3 className="text-m mt-3 font-bold">
            Editions and DLC&apos;s {game.name}
          </h3>
          <DlcComponent dlc={dlc} isLoaded={isLoaded} />
        </div>
      </section>
    </>
  );
}

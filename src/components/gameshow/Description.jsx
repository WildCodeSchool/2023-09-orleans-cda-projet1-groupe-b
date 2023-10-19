import { useState, useEffect } from 'react';
import { fetchGameDetails } from '../../api/api-fetch';
import { ReadMore } from './ReadMore';
import Title from '../Title';

export default function GameDesc({ gameId }) {
  const [game, setGame] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function nl2br(element) {
    return element.split('\n').map((it, i) => <div key={'x' + i}>{it}</div>);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId,
      setter: setGame,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, [gameId]);

  return (
    <>
      <h1 className="mb-4 mt-10 text-4xl font-bold text-light">À propos de </h1>
      {isLoaded ? <Title title={game.name} /> : 'Loading...'}
      {isLoaded ? (
        <div className="-mt-8 text-light">
          {game.description_raw.length > 500 ? (
            <ReadMore>{game.description_raw}</ReadMore>
          ) : (
            game.description_raw
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {game.platforms &&
        game.platforms.map((pf, index) =>
          pf.platform.name === 'PC' ? (
            <div key={index} className="mb-32 text-light">
              <h1 className="mb-4 mt-10 text-4xl font-bold">
                <Title title="Configuration requise pour PC" />
              </h1>
              <h3 className="-mt-8 mb-4 whitespace-pre-line font-bold">
                Configuration minimum
              </h3>
              {pf && pf.requirements && pf.requirements.minimum ? (
                <p>{nl2br(pf.requirements.minimum)}</p>
              ) : (
                'N/A'
              )}
              <h3 className="mb-4 mt-10 font-bold">
                Configuration recommandée
              </h3>
              {pf && pf.requirements && pf.requirements.recommended ? (
                <div>{nl2br(pf.requirements.recommended)}</div>
              ) : (
                'N/A'
              )}
            </div>
          ) : (
            ''
          ),
        )}
    </>
  );
}

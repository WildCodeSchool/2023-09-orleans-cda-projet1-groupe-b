import { useState, useEffect } from 'react';
import { fetchGameDetails } from '../../api/api-fetch';
import ReadMore from './ReadMore';
import Title from '../Title';
import nl2br from '../../utils/TextFormatter';

export default function GameDesc({ gameId }) {
  const [game, setGame] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const descText = game.description_raw;

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
      <div className="mt-20">
        {isLoaded ? <Title prefix="About " title={game.name} /> : 'Loading...'}
        {isLoaded ? (
          <div className="-mt-8 text-light">
            {descText.length > 500 ? (
              <ReadMore descText={descText} />
            ) : (
              descText
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="mt-20">
        <Title title="Pc system requirements" />
      </div>
      {game.platforms &&
        game.platforms.map((pf, index) =>
          pf.platform.name === 'PC' ? (
            <div key={index} className="text-light">
              <h3 className="-mt-8 mb-4 whitespace-pre-line font-bold">
                Minimum requirements
              </h3>
              {pf && pf.requirements && pf.requirements.minimum ? (
                <p>{nl2br(pf.requirements.minimum)}</p>
              ) : (
                'N/A'
              )}
              <h3 className="mb-4 mt-10 font-bold">Recommended requirements</h3>
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

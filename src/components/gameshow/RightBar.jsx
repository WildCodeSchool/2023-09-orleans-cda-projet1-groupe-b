// import '../App.css';
import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';
import { useEffect, useState } from 'react';
import { pegi18, pegi16, pegi12, pegi7, pegi3 } from './AgeRatingLogos';
import storeLogo from './StoreLogos';
import platformLogo from './PlatformLogos';

export default function RightBar({ gameId }) {
  const [name, setName] = useState('');
  const [metascore, setMetascore] = useState('');
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [released, setReleased] = useState('');
  const [developers, setDevelopers] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [pegi, setPegi] = useState({});
  const [website, setWebsite] = useState('');
  const [stores, setStores] = useState([]);
  const [parentPlatforms, setParentPlatforms] = useState([]);

  console.log(gameId);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId,
      setter: setMetascore,
      property: 'metacritic',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPlatforms,
      property: 'platforms',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setParentPlatforms,
      property: 'parent_platforms',
      signal,
    });
    fetchGameDetails({ gameId, setter: setGenres, property: 'genres', signal });
    fetchGameDetails({
      gameId,
      setter: setReleased,
      property: 'released',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setDevelopers,
      property: 'developers',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPublishers,
      property: 'publishers',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPegi,
      property: 'esrb_rating',
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setWebsite,
      property: 'website',
      signal,
    });
    fetchGameDetails({ gameId, setter: setStores, property: 'stores', signal });
    fetchGameDetails({ gameId, setter: setName, property: 'name', signal });

    return () => controller.abort();
  }, [gameId]);

  const platformIcons = (platformId) => {
    return platformId === 1 ? pcLogo : platformId === 2 ? psLogo : '';
  };

  return (
    <>
      <section className="background">
        <div className="rightbar container w-25 border rounded-lg border-black p-4">
          <h3 className="text-xl font-bold">Métascore</h3>
          <div className="flex justify-center">
            <span className="metascore p-5 m-3 bg-lime-500 text-white rounded-lg text-5xl font-bold">
              <p>{metascore}</p>
            </span>
          </div>
        </div>
        <div className="rightbar container w-25 border rounded-lg border-black p-4 mt-5">
          <h3 className="text-m font-bold">Plateforme(s)</h3>
          <div className="flex">
            {/* {platforms.map((pf, key) => (
              <>
                <p key={key}>{pf.platform.name}</p>
              </>
            ))} */}
            {parentPlatforms.map((ppf, key) => (
              <>
                <img className="pfLogo mt-1 h-7 m-auto" key={key} src={platformLogo(ppf.platform.slug)} alt={ppf.platform.slug} />
              </>
            ))}
          </div>
          <h3 className="text-m font-bold">Genre(s)</h3>
          {genres.map((g, key) => (
            <p key={key}>{g.name}</p>
          ))}
          <h3 className="text-m font-bold">Date de sortie</h3>
          <p>{released}</p>
          <h3 className="text-m font-bold">Développeur</h3>
          {developers.map((dev, key) => (
            <p key={key}>{dev.name}</p>
          ))}
          <h3 className="text-m font-bold">Éditeur</h3>
          {publishers.map((pub, key) => (
            <p key={key}>{pub.name}</p>
          ))}
          <h3 className="text-m font-bold">Classement PEGI</h3>
          <div>
            {pegi.name === ('Mature' || 'Adult')
              ? pegi18
              : pegi.name === 'Teen 10+'
              ? pegi16
              : pegi.name === 'Teen'
              ? pegi12
              : pegi.name === 'Everyone'
              ? pegi3
              : 'Unknown rating'}
          </div>

          <h3 className="text-m font-bold">Site Web</h3>
          <a href={website} target="_blank">
            {website}
          </a>
        </div>
        <div className="rightbar container w-25 border rounded-lg border-black p-4 mt-5">
          <h3 className="text-m font-bold">Acheter {name}</h3>
          {stores.map((st, key) => (
            <button
              className="storeButton bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              key={key}
            >
              {st.store.name}
              <img
                width="25"
                className="text-center mx-1.5"
                src={storeLogo(st.store.name)}
                alt={st.store.name}
              />
            </button>
          ))}
          <h3 className="text-m font-bold">DLC de {name}</h3>
        </div>
      </section>
    </>
  );
}

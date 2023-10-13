import { fetchGameDetails } from "../../api/api-fetch";
import { useEffect, useState } from "react";
import ageRating from "./AgeRatingLogos";
import { Tooltip } from "flowbite";
import storeLogo from "./StoreLogos";
import platformLogo from "./PlatformLogos";
import DlcComponent from "./DlcComponent";
import perc2color from "./MetascoreColor";

export default function RightBar({ gameId }) {
  const [name, setName] = useState("");
  const [metascore, setMetascore] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [released, setReleased] = useState("");
  const [developers, setDevelopers] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [pegi, setPegi] = useState({});
  const [website, setWebsite] = useState("");
  const [stores, setStores] = useState([]);
  const [parentPlatforms, setParentPlatforms] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId,
      setter: setMetascore,
      property: "metacritic",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPlatforms,
      property: "platforms",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setParentPlatforms,
      property: "parent_platforms",
      signal,
    });
    fetchGameDetails({ gameId, setter: setGenres, property: "genres", signal });
    fetchGameDetails({
      gameId,
      setter: setReleased,
      property: "released",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setDevelopers,
      property: "developers",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPublishers,
      property: "publishers",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setPegi,
      property: "esrb_rating",
      signal,
    });
    fetchGameDetails({
      gameId,
      setter: setWebsite,
      property: "website",
      signal,
    });
    fetchGameDetails({ gameId, setter: setStores, property: "stores", signal });
    fetchGameDetails({ gameId, setter: setName, property: "name", signal });

    return () => controller.abort();
  }, [gameId]);

  const platformIcons = (platformId) => {
    return platformId === 1 ? pcLogo : platformId === 2 ? psLogo : "";
  };

  // set the tooltip content element
  const targetEl = document.getElementById("tooltipContent");

  // set the element that trigger the tooltip using hover or click
  const triggerEl = document.getElementById("tooltipButton");

  const options = {
    placement: "top",
    triggerType: "hover",
  };

  const tooltip = new Tooltip(targetEl, triggerEl, options);

  const metascoreColor = perc2color(parseInt(metascore));

  return (
    <>
      <section className="background">
        <div className="rightbar w-25 border-black container rounded-lg border p-4">
          <h3 className={`text-xl font-bold`}>Métascore</h3>
          <div className="flex justify-center">
            <div>
              {metascore ? (
                <p
                  style={{ backgroundColor: metascoreColor }}
                  className={`m-3 rounded-lg p-5 text-5xl font-bold`}
                >
                  {metascore}
                </p>
              ) : (
                <p className="bg-[#9e9e9e] text-white m-3 rounded-lg p-5 font-bold text-4xl">
                  NA
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="rightbar w-25 border-black container mt-5 rounded-lg border p-4">
          <h3 className="text-m font-bold">Plateforme(s)</h3>
          <div className="grid">
            <button
              id="tooltipButton"
              data-tooltip-target="tooltip-animation"
              type="button"
              className="flex flex-row"
            >
              {parentPlatforms.map((ppf) => (
                <>
                  <img
                    className="pfLogo m-auto mt-1 h-6"
                    key={ppf.platform.id}
                    src={platformLogo(ppf.platform.slug)}
                    alt={ppf.platform.slug}
                  />
                </>
              ))}
            </button>
            <div
              id="tooltipContent"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-tertiary rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {platforms.map((pf) => (
                <>
                  <div key={pf.platform.id}>
                    <p>{pf.platform.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <h3 className="text-m font-bold">Genre(s)</h3>
          <div>
            {genres.length > 0 ? (
              genres.map((g) => <p key={g.id}>{g.name}</p>)
            ) : (
              <p>N/A</p>
            )}
          </div>
          <h3 className="text-m font-bold">Date de sortie</h3>
          {released ? <p>{released}</p> : <p>N/A</p>}
          <h3 className="text-m font-bold">Développeur</h3>
          {developers.map((dev) => (
            <div key={dev.id}>
              <p>{dev.name}</p>
            </div>
          ))}
          <h3 className="text-m font-bold">Éditeur</h3>
          {publishers != [] ? (
            publishers.map((pub) => <p key={pub.id}>{pub.name}</p>)
          ) : (
            <p>"N/A"</p>
          )}
          <h3 className="text-m font-bold">Classement PEGI</h3>
          <div>
            {pegi != null ? (
              <img
                className="h-16 mt-1"
                src={ageRating(pegi.name)}
                alt={pegi.name}
              />
            ) : (
              <p>N/A</p>
            )}
          </div>

          <h3 className="text-m font-bold">Site Web</h3>
          {website ? (
            <a href={website} target="_blank">
              <p className="text-ellipsis overflow-hidden text-primary">
                {website}
              </p>
            </a>
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div className="rightbar w-25 border-black container mt-5 rounded-lg border p-4">
          <h3 className="text-m font-bold">Acheter {name}</h3>
          {stores.map((st) => (
            <button
              className="storeButton justify-center w-full text-center bg-[#0D4F61] text-light hover:bg-primary hover:bg-primary inline-flex items-center rounded my-2 font-bold transition duration-150 hover:-translate-y-0.5"
              key={st.id}
            >
              <div className="hover:invert flex flex-row px-4 py-3 w-full justify-center">
                {st.store.name}
                <img
                  width="25"
                  className="mx-1.5 text-center"
                  src={storeLogo(st.store.name)}
                  alt={st.store.name}
                />
              </div>
            </button>
          ))}
          <img
            className="mt-4"
            src="/src/assets/separator.png"
            alt="separator"
          />
          <h3 className="text-m font-bold">Éditions et DLC de {name}</h3>
          <DlcComponent gameId={gameId} />
        </div>
      </section>
    </>
  );
}

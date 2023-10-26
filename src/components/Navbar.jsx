import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Collapsible from './NavbarTools/Collapsible';
import Dropdown from './NavbarTools/Dropdown';
import { fetchGames } from '../api/api-fetch';
import { genresURL, platformsURL } from '../api/api-url';

function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenres, setIsOpenGenres] = useState(false);
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleClickCollapsePlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };

  const handleClickCollapseGenres = () => {
    setIsOpenGenres(!isOpenGenres);
  };

  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGames({
      setter: ({ results }) => {
        setGenres(results);
      },
      parameter: genresURL,
      setLoaded: setIsLoaded,
      signal,
      queryString:
        'page_size=10&ordering=rating-released.desc&dates=1990-01-01,1991-01-01.1990-01-01,1991-01-31',
    });

    fetchGames({
      setter: ({ results }) => {
        setPlatforms(results);
      },
      parameter: platformsURL,
      setLoaded: setIsLoaded,
      signal,
    });
    return () => controller.abort();
  }, []);

  const playStationPlatforms = platforms
    .filter(
      (platform) =>
        platform.name.includes('Play') || platform.name.includes('PS'),
    )
    .sort();

  const nintendoPlatforms = platforms
    .filter(
      (platform) =>
        platform.name.includes('Nin') ||
        platform.name.includes('NES') ||
        platform.name.includes('Game B') ||
        platform.name.includes('Wii'),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const xboxPlatforms = platforms
    .filter((platform) => platform.name.includes('Xbox'))
    .sort((a, b) => a.name.localeCompare(b.name));

  const retroPlatforms = platforms
    .filter(
      (platform) =>
        platform.name.includes('Ami') ||
        platform.name.includes('Ata') ||
        platform.name.includes('Cla') ||
        platform.name.includes('Com') ||
        platform.name.includes('SEGA') ||
        platform.name.includes('Genesis') ||
        platform.name.includes('Dream') ||
        platform.name.includes('Jaguar') ||
        platform.name.includes('Game G'),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (!isDroppedDown) {
      setIsDroppedDown(true);
    }
  }, [isDroppedDown]);

  return (
    <>
      <div className="sticky top-20 z-10 p-5">
        <ul>
          <li className="my-5 pb-3">
            <Link className="flex items-center gap-3" to="/">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 16.0714V25H0V8.92857L12.5 0L25 8.92857V25H16.6667V16.0714H8.33333Z"
                  fill="#EFEFEF"
                />
              </svg>
              <span className="font-bold text-light opacity-80 hover:opacity-100">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="mb-2 flex items-center gap-3 opacity-80 hover:opacity-100"
              to="/recommandations"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 2.36111C18.0556 2.36111 22.6389 6.94444 22.6389 12.5C22.6389 18.0556 18.0556 22.6389 12.5 22.6389C6.94444 22.6389 2.36111 18.1944 2.36111 12.5C2.36111 6.80556 6.94444 2.36111 12.5 2.36111ZM9.72222 0C4.30556 0 0 4.30556 0 9.72222V15.2778C0 20.6944 4.30556 25 9.72222 25H15.2778C20.6944 25 25 20.6944 25 15.2778V9.72222C25 4.30556 20.6944 0 15.2778 0H9.72222Z"
                  fill="white"
                />
                <path
                  d="M15.9721 17.6389L12.4999 15.8333L9.02767 17.5L9.58323 13.75L6.94434 10.9722L10.6943 10.2778L12.4999 6.80554L14.3054 10.2778L18.1943 10.9722L15.4166 13.75L15.9721 17.6389Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-light">Recommandations</span>
            </Link>
          </li>
          <ul className=" mb-5 pl-[38px] text-light">
            <li className="py-[4px] opacity-80 hover:opacity-100">
              <Link to="/recommandations/news">News</Link>
            </li>
            <li className="py-[4px] opacity-80 hover:opacity-100">
              <Link to="/recommandations/bestsellers">BestSellers</Link>
            </li>
            <li className="py-[4px] opacity-80 hover:opacity-100">
              <Link to="/recommandations/offers">Offers</Link>
            </li>
          </ul>
          <li>
            <button
              className="flex gap-3 font-text"
              onClick={handleClickCollapsePlatform}
            >
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5166 5.62659C24.2864 2.77647 21.791 0.0737632 19.314 0.0737632C14.756 0.0737632 15.5387 3.09096 12.6013 3.09096C9.16207 3.09096 10.5617 -0.0245169 5.8978 0.0246231C3.74771 0.0246231 0.709033 2.03937 0.570912 5.67573C0.446602 8.99268 0.0184256 17.1745 0.0184256 17.1745C0.0184256 17.1745 -0.036823 19.9263 2.27441 19.9263C5.95765 19.9263 5.95765 13.2924 12.5875 13.2924C18.9411 13.2924 18.9871 19.9755 23.0387 19.9755C24.1437 19.9755 24.9862 18.5504 24.9724 17.3219C24.931 13.1942 24.756 8.56516 24.5166 5.62659ZM9.85728 8.08359H7.29283V10.806H5.27625V8.08359H2.73021V5.93126H5.27625V3.19907H7.29283V5.93126H9.85728V8.08359ZM18.8306 2.82561C19.581 2.82561 20.1888 3.47425 20.1888 4.27524C20.1888 5.07622 19.581 5.72487 18.8306 5.72487C18.0801 5.72487 17.4724 5.07622 17.4724 4.27524C17.4724 3.47425 18.0801 2.82561 18.8306 2.82561ZM16.2984 8.42757C15.5479 8.42757 14.9402 7.77892 14.9402 6.97794C14.9402 6.17696 15.5479 5.52831 16.2984 5.52831C17.0488 5.52831 17.6565 6.17696 17.6565 6.97794C17.6565 7.77892 17.0488 8.42757 16.2984 8.42757ZM18.7845 11.1303C18.0341 11.1303 17.4263 10.4816 17.4263 9.68064C17.4263 8.87966 18.0341 8.23101 18.7845 8.23101C19.535 8.23101 20.1427 8.87966 20.1427 9.68064C20.1427 10.4816 19.535 11.1303 18.7845 11.1303ZM21.3168 8.47671C20.5663 8.47671 19.9586 7.82806 19.9586 7.02708C19.9586 6.2261 20.5663 5.57745 21.3168 5.57745C22.0672 5.57745 22.675 6.2261 22.675 7.02708C22.675 7.82806 22.0672 8.47671 21.3168 8.47671Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-light opacity-80 hover:opacity-100">
                Plateforms
              </span>
            </button>
          </li>
          <li className=" mb-5 gap-3 text-light">
            {isOpenPlatform ? (
              <Collapsible style="z-50 backdrop-blur-sm">
                <Dropdown
                  title="PlayStation"
                  style="opacity-80 hover:opacity-100"
                >
                  {playStationPlatforms.map((platform, index) => (
                    <li className="py-[4px] font-text text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Xbox" style="opacity-80 hover:opacity-100">
                  {xboxPlatforms.map((platform, index) => (
                    <li className="py-[4px] font-text text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Nintendo" style="opacity-80 hover:opacity-100">
                  {nintendoPlatforms.map((platform, index) => (
                    <li className="font-pixel py-[4px] text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Retro" style="opacity-80 hover:opacity-100">
                  {retroPlatforms.map((platform, index) => (
                    <li className="py-[4px] font-text text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <li className="py-[4px] font-text text-light opacity-80 hover:opacity-100">
                  PC
                </li>
                <li className="py-[4px] font-text text-light opacity-80 hover:opacity-100">
                  Android
                </li>
                <li className="py-[4px] font-text text-light opacity-80 hover:opacity-100">
                  iOS
                </li>
              </Collapsible>
            ) : null}
          </li>
          <li className=" gap-3 font-bold text-light">
            <button
              className="flex gap-3 font-text"
              onClick={handleClickCollapseGenres}
            >
              <img src="/images/drop_arrow.svg"></img>
              <span className="font-bold text-light opacity-80 hover:opacity-100">
                Genres
              </span>
            </button>
          </li>
          <li className=" w-max gap-3 text-light">
            {isOpenGenres ? (
              <Collapsible genres={genres}>
                {genres.map((genre, index) => (
                  <Link
                    key={index}
                    className="py-[4px] font-text text-light opacity-80 hover:opacity-100"
                  >
                    {genre.name}
                  </Link>
                ))}
              </Collapsible>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

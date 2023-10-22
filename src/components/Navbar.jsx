import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../App.jsx';
import Collapsible from './NavbarTools/Collapsible';
import Dropdown from './NavbarTools/Dropdown';

function Navbar({ genres, platforms }) {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenres, setIsOpenGenres] = useState(false);
  const [isDropedDown, setIsDropedDown] = useState(false);

  const handleClickCollapsePlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };
  const handleClickCollapseGenres = () => {
    setIsOpenGenres(!isOpenGenres);
  };

  const playStationPlatforms = [];

  platforms.filter((platform) => {
    if (platform.name.includes('Play') || platform.name.includes('PS')) {
      playStationPlatforms.push(platform);
    }
  });
  const filteredPlayStation = playStationPlatforms.sort();

  const nintendoPlatforms = [];

  platforms.filter((platform) => {
    if (
      platform.name.includes('Nin') ||
      platform.name.includes('NES') ||
      platform.name.includes('Game B') ||
      platform.name.includes('Wii')
    ) {
      nintendoPlatforms.push(platform);
    }
  });
  const filteredNintendo = nintendoPlatforms.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const xboxPlatforms = [];

  platforms.filter((platform) => {
    if (platform.name.includes('Xbox')) {
      xboxPlatforms.push(platform);
    }
  });
  const filteredXbox = xboxPlatforms.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const retroPlatforms = [];

  platforms.filter((platform) => {
    if (
      platform.name.includes('Ami') ||
      platform.name.includes('Ata') ||
      platform.name.includes('Cla') ||
      platform.name.includes('Com') ||
      platform.name.includes('SEGA') ||
      platform.name.includes('Genesis') ||
      platform.name.includes('Dream') ||
      platform.name.includes('Jaguar') ||
      platform.name.includes('Game G')
    ) {
      retroPlatforms.push(platform);
    }
  });

  const filteredRetro = retroPlatforms.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  useEffect(() => {
    if (!isDropedDown) {
      setIsDropedDown(false);
    }
  }, [isDropedDown]);

  return (
    <>
      <nav className="p-5">
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
                <g clipPath="url(#clip0_255_2458)">
                  <path
                    d="M12.5 2.36111C18.0556 2.36111 22.6389 6.94444 22.6389 12.5C22.6389 18.0556 18.0556 22.6389 12.5 22.6389C6.94444 22.6389 2.36111 18.1944 2.36111 12.5C2.36111 6.80556 6.94444 2.36111 12.5 2.36111ZM9.72222 0C4.30556 0 0 4.30556 0 9.72222V15.2778C0 20.6944 4.30556 25 9.72222 25H15.2778C20.6944 25 25 20.6944 25 15.2778V9.72222C25 4.30556 20.6944 0 15.2778 0H9.72222Z"
                    fill="white"
                  />
                  <path
                    d="M15.9721 17.6389L12.4999 15.8333L9.02767 17.5L9.58323 13.75L6.94434 10.9722L10.6943 10.2778L12.4999 6.80554L14.3054 10.2778L18.1943 10.9722L15.4166 13.75L15.9721 17.6389Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_255_2458">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
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
                <g clipPath="url(#clip0_137_3013)">
                  <path
                    d="M24.5166 5.62659C24.2864 2.77647 21.791 0.0737632 19.314 0.0737632C14.756 0.0737632 15.5387 3.09096 12.6013 3.09096C9.16207 3.09096 10.5617 -0.0245169 5.8978 0.0246231C3.74771 0.0246231 0.709033 2.03937 0.570912 5.67573C0.446602 8.99268 0.0184256 17.1745 0.0184256 17.1745C0.0184256 17.1745 -0.036823 19.9263 2.27441 19.9263C5.95765 19.9263 5.95765 13.2924 12.5875 13.2924C18.9411 13.2924 18.9871 19.9755 23.0387 19.9755C24.1437 19.9755 24.9862 18.5504 24.9724 17.3219C24.931 13.1942 24.756 8.56516 24.5166 5.62659ZM9.85728 8.08359H7.29283V10.806H5.27625V8.08359H2.73021V5.93126H5.27625V3.19907H7.29283V5.93126H9.85728V8.08359ZM18.8306 2.82561C19.581 2.82561 20.1888 3.47425 20.1888 4.27524C20.1888 5.07622 19.581 5.72487 18.8306 5.72487C18.0801 5.72487 17.4724 5.07622 17.4724 4.27524C17.4724 3.47425 18.0801 2.82561 18.8306 2.82561ZM16.2984 8.42757C15.5479 8.42757 14.9402 7.77892 14.9402 6.97794C14.9402 6.17696 15.5479 5.52831 16.2984 5.52831C17.0488 5.52831 17.6565 6.17696 17.6565 6.97794C17.6565 7.77892 17.0488 8.42757 16.2984 8.42757ZM18.7845 11.1303C18.0341 11.1303 17.4263 10.4816 17.4263 9.68064C17.4263 8.87966 18.0341 8.23101 18.7845 8.23101C19.535 8.23101 20.1427 8.87966 20.1427 9.68064C20.1427 10.4816 19.535 11.1303 18.7845 11.1303ZM21.3168 8.47671C20.5663 8.47671 19.9586 7.82806 19.9586 7.02708C19.9586 6.2261 20.5663 5.57745 21.3168 5.57745C22.0672 5.57745 22.675 6.2261 22.675 7.02708C22.675 7.82806 22.0672 8.47671 21.3168 8.47671Z"
                    fill="white"
                  />
                </g>
              </svg>
              <span className="font-bold text-light opacity-80 hover:opacity-100">
                Plateforms
              </span>
            </button>
          </li>
          <li className=" mb-5 gap-3 text-light">
            {isOpenPlatform ? (
              <Collapsible>
                <Dropdown
                  title="PlayStation"
                  style="opacity-80 hover:opacity-100"
                >
                  {filteredPlayStation.map((platform, index) => (
                    <li className="py-[4px] font-text text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Xbox" style="opacity-80 hover:opacity-100">
                  {filteredXbox.map((platform, index) => (
                    <li className="py-[4px] font-text text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Nintendo" style="opacity-80 hover:opacity-100">
                  {filteredNintendo.map((platform, index) => (
                    <li className="font-pixel py-[4px] text-light" key={index}>
                      {platform.name}
                    </li>
                  ))}
                </Dropdown>
                <Dropdown title="Retro" style="opacity-80 hover:opacity-100">
                  {filteredRetro.map((platform, index) => (
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
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_262_2569)">
                  <path
                    d="M0 0.784915C0.198413 0.207506 0.613276 0 1.21753 0C4.329 0.018044 7.43146 0.00902201 10.5339 0.00902201C11.3456 0.00902201 11.7063 0.369903 11.7063 1.18188C11.7063 4.3035 11.7063 7.42512 11.7063 10.5558C11.7063 11.3677 11.3456 11.7286 10.5339 11.7286C7.43146 11.7286 4.31999 11.7196 1.21753 11.7376C0.613276 11.7376 0.198413 11.5301 0 10.9527C0 7.56045 0 4.16817 0 0.784915ZM9.74026 9.76182C9.74026 7.15446 9.74026 4.56514 9.74026 1.98484C7.13384 1.98484 4.54545 1.98484 1.96609 1.98484C1.96609 4.59221 1.96609 7.1725 1.96609 9.76182C4.56349 9.76182 7.14286 9.76182 9.74026 9.76182Z"
                    fill="white"
                  />
                  <path
                    d="M14.1054 25C13.8168 24.9098 13.5552 24.7745 13.4019 24.4858C13.2305 24.1429 13.2396 23.8091 13.447 23.4933C13.5191 23.3851 13.6093 23.2858 13.6995 23.1956C16.8561 20.0289 20.0217 16.8712 23.1873 13.7045C23.4578 13.4338 23.7554 13.2353 24.1523 13.2985C24.6393 13.3797 24.9459 13.7406 24.982 14.2368C24.991 14.354 24.982 14.4804 24.982 14.6067C24.982 17.6651 24.973 20.7236 24.991 23.7821C24.991 24.3865 24.7836 24.8015 24.2064 25C20.8424 25 17.4694 25 14.1054 25ZM23.0249 16.7268C20.9235 18.829 18.8132 20.9401 16.7208 23.0332C18.7951 23.0332 20.9055 23.0332 23.0249 23.0332C23.0249 20.904 23.0249 18.7929 23.0249 16.7268Z"
                    fill="white"
                  />
                  <path
                    d="M0 14.0653C0.036075 13.9751 0.0721501 13.8849 0.117244 13.8037C0.414863 13.2443 1.12734 13.109 1.61436 13.533C1.89394 13.7766 2.14646 14.0563 2.41703 14.3179C3.49026 15.3915 4.57251 16.4652 5.64574 17.5478C5.70887 17.611 5.75397 17.6922 5.82612 17.7824C5.92532 17.6922 5.98846 17.629 6.05159 17.5749C7.35931 16.2667 8.66703 14.9675 9.96573 13.6593C10.2453 13.3796 10.5519 13.2263 10.9488 13.3255C11.6613 13.4969 11.9408 14.3089 11.4899 14.8863C11.4268 14.9675 11.3456 15.0397 11.2734 15.1209C9.99278 16.402 8.72114 17.6741 7.44048 18.9462C7.37734 19.0094 7.29618 19.0545 7.20599 19.1176C7.30519 19.2259 7.36833 19.2891 7.42244 19.3522C8.72114 20.6514 10.0198 21.9505 11.3185 23.2497C11.6883 23.6196 11.7875 24.0166 11.6162 24.4226C11.4809 24.7384 11.2193 24.9007 10.9127 25.018C10.7864 25.018 10.6512 25.018 10.5249 25.018C10.2904 24.8556 10.0289 24.7113 9.82143 24.5128C8.54978 23.2587 7.29618 21.9957 6.04257 20.7416C5.97944 20.6784 5.91631 20.6243 5.84416 20.5521C5.77201 20.6243 5.70887 20.6784 5.64574 20.7416C4.40115 21.9776 3.15657 23.2407 1.89394 24.4857C1.68651 24.6932 1.41595 24.8286 1.17244 25C1.04618 25 0.910895 25 0.784632 25C0.387807 24.8737 0.135281 24.612 0 24.2151C0 24.0888 0 23.9534 0 23.8271C0.171356 23.5835 0.315657 23.3129 0.514069 23.1054C1.75866 21.8423 3.01227 20.5972 4.26587 19.3432C4.329 19.28 4.38312 19.2169 4.45527 19.1447C4.38312 19.0725 4.329 19.0094 4.26587 18.9462C3.02128 17.6831 1.75866 16.4381 0.514069 15.175C0.306638 14.9675 0.162338 14.6968 0 14.4533C0 14.3269 0 14.1916 0 14.0653Z"
                    fill="white"
                  />
                  <path
                    d="M19.1378 0.0090332C22.3575 0.0090332 24.991 2.64346 24.991 5.86432C24.991 9.08518 22.3394 11.7377 19.1198 11.7286C15.9001 11.7106 13.2666 9.07616 13.2756 5.86432C13.2846 2.63444 15.9181 0.0090332 19.1378 0.0090332ZM19.1288 1.95779C16.9913 1.95779 15.2327 3.70806 15.2327 5.8553C15.2236 8.00254 16.9913 9.77085 19.1378 9.77085C21.2752 9.77085 23.0339 8.02058 23.0339 5.87334C23.0429 3.7261 21.2752 1.95779 19.1288 1.95779Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_262_2569">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-bold text-light opacity-80 hover:opacity-100">
                Genres
              </span>
            </button>
          </li>
          <li className=" w-max gap-3 text-light">
            {isOpenGenres ? (
              <Collapsible genres={genres}>
                {genres.map((genre, index) => (
                  <>
                    <Link
                      className="py-[4px] font-text text-light opacity-80 hover:opacity-100"
                      key={index}
                    >
                      {genre.name}
                    </Link>
                  </>
                ))}
              </Collapsible>
            ) : (
              ''
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

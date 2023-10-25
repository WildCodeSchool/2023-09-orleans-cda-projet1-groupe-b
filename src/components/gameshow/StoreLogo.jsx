export default function storeLogo(store) {
  const steamLogo = '/steamwh.png';
  const playStoreLogo = '/playstation.png';
  const ninStoreLogo = '/nintendo.png';
  const micStoreLogo = '/xbox.png';
  const appLogo = '/appstore.png';
  const gogLogo = '/gog.png';
  const epicLogo = '/epic-games.png';

  switch (store) {
    case 'PlayStation Store':
      return playStoreLogo;
    case 'Steam':
      return steamLogo;
    case 'Xbox 360 Store':
      return micStoreLogo;
    case 'Xbox Store':
      return micStoreLogo;
    case 'Nintendo Store':
      return ninStoreLogo;
    case 'App Store':
      return appLogo;
    case 'GOG':
      return gogLogo;
    case 'Epic Games':
      return epicLogo;

    default:
      return <p>No store found</p>;
  }
}

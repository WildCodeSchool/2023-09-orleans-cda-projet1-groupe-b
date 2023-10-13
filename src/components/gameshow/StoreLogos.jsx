export default function storeLogo(store) {
  const steamLogo = "/src/assets/steamwh.png";
  const playStoreLogo = "/src/assets/playstation.png";
  const ninStoreLogo = "/src/assets/nintendo.png";
  const micStoreLogo = "/src/assets/xbox.png";
  const appLogo = "/src/assets/appstore.png";
  const gogLogo = "/src/assets/gog.png";
  const epicLogo = "/src/assets/epic-games.png";

  switch (store) {
    case "PlayStation Store":
      return playStoreLogo;
    case "Steam":
      return steamLogo;
    case "Xbox 360 Store":
      return micStoreLogo;
    case "Xbox Store":
      return micStoreLogo;
    case "Nintendo Store":
      return ninStoreLogo;
    case "App Store":
      return appLogo;
    case "GOG":
      return gogLogo;
    case "Epic Games":
      return epicLogo;

    default:
      return <p>No store found</p>;
  }
}

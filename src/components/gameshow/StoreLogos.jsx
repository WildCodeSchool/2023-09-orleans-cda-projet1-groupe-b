export default function storeLogo(store) {
    const steamLogo = "/src/assets/steamwh.png";
    const playStoreLogo = "/src/assets/playstation.png";
    const ninStoreLogo = "/src/assets/nintendo.png";
    const micStoreLogo = "/src/assets/xbox.png";

    switch (store) {
        case 'PlayStation Store':
            return playStoreLogo;
        case 'Steam':
            return steamLogo;
        case 'Xbox 360 Store':
            return micStoreLogo;
        case 'Nintendo Store':
            return ninStoreLogo;
        default:
            return (<p>No store found</p>);
    }
}
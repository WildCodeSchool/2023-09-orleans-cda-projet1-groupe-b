export default function platformLogo(platform) {

  const pcLogo = "/src/assets/windows.png";
  const psLogo = "/src/assets/playstation.png";
  const xbLogo = "/src/assets/xbox.png";
  const ntLogo = "/src/assets/nintendo.png";

  switch (platform) {
    case 'pc':
        return pcLogo;
    case 'playstation':
        return psLogo;
    case 'xbox':
        return xbLogo;
    case 'nintendo':
        return ntLogo;
    default:
        return (<p>Game is not released yet</p>)
  }
}

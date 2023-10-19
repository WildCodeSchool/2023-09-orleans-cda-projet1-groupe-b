export default function platformLogo(platform) {
  const pcLogo = '/windows.png';
  const psLogo = '/playstation.png';
  const xbLogo = '/xbox.png';
  const ntLogo = '/nintendo.png';
  const linLogo = '/linux.png';
  const macLogo = '/macos.png';
  const iosLogo = '/ios.png';
  const andLogo = '/android.png';
  const appLogo = '/appstore.png';

  switch (platform) {
    case 'pc':
      return pcLogo;
    case 'playstation':
      return psLogo;
    case 'xbox':
      return xbLogo;
    case 'nintendo':
      return ntLogo;
    case 'linux':
      return linLogo;
    case 'appstore':
      return appLogo;
    case 'mac':
      return macLogo;
    case 'ios':
      return iosLogo;
    case 'android':
      return andLogo;
    default:
      return <p>Game is not released yet</p>;
  }
}

export default function platformLogo(platform) {
  const pcLogo = '/src/assets/windows.png';
  const psLogo = '/src/assets/playstation.png';
  const xbLogo = '/src/assets/xbox.png';
  const ntLogo = '/src/assets/nintendo.png';
  const linLogo = '/src/assets/linux.png';
  const macLogo = '/src/assets/macos.png';
  const iosLogo = '/src/assets/ios.png';
  const andLogo = '/src/assets/android.png';

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

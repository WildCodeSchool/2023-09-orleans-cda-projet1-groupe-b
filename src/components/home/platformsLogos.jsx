import LogoAndroid from '../logos/LogoAndroid';
import LogoIos from '../logos/LogoIos';
import LogoNintendo from '../logos/LogoNintendo';
import LogoPc from '../logos/LogoPc';
import LogoPlaystation from '../logos/LogoPlaystation';
import LogoXbox from '../logos/LogoXbox';

export const PlatformsLogos = (platformData) => {
  if (platformData.name === 'PC') {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoPc />
      </div>
    );
  }

  if (
    platformData.name.includes('PlayStation') ||
    platformData.name.includes('PS')
  ) {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoPlaystation />
      </div>
    );
  }

  if (platformData.name.includes('Xbox')) {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoXbox />
      </div>
    );
  }

  if (platformData.name.includes('Nintendo')) {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoNintendo />
      </div>
    );
  }

  if (platformData.name.includes('Android')) {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoAndroid />
      </div>
    );
  }

  if (
    platformData.name.includes('iOS') ||
    platformData.name.includes('Apple')
  ) {
    return (
      <div className="flex h-[1.2rem] w-[1.2rem]">
        <LogoIos />
      </div>
    );
  }

  return null;
};

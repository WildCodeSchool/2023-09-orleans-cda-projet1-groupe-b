import LogoAndroid from '../logos/LogoAndroid';
import LogoIos from '../logos/LogoIos';
import LogoNintendo from '../logos/LogoNintendo';
import LogoPc from '../logos/LogoPc';
import LogoPlaystation from '../logos/LogoPlaystation';
import LogoXbox from '../logos/LogoXbox';
import LogoLinux from '../logos/LogoLinux';
import LogoCommodor from '../logos/LogoCommodor';
import LogoAtari from '../logos/LogoAtari';
import LogoSega from '../logos/LogoSega';
import LogoDreamcast from '../logos/LogoDreamcast';
import LogoNeoGeo from '../logos/LogoNeoGeo';

export default function PlatformsLogo({ platformData }) {
  const { name } = platformData;

  return (
    <div>
      {(name.includes('PC') || name.includes('Web')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoPc />
        </div>
      )}

      {(name.includes('PlayStation') || name.includes('PS')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoPlaystation />
        </div>
      )}

      {name.includes('Xbox') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoXbox />
        </div>
      )}

      {(name.includes('Nintendo') ||
        name.includes('Wii') ||
        name.includes('GameCube') ||
        name.includes('NES') ||
        name.includes('Game Boy')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoNintendo />
        </div>
      )}

      {name.includes('Android') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoAndroid />
        </div>
      )}

      {(name.includes('iOS') ||
        name.includes('Apple') ||
        name.includes('Classic Macintosh')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoIos />
        </div>
      )}

      {name.includes('Linux') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoLinux />
        </div>
      )}

      {name.includes('Commodor') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoCommodor />
        </div>
      )}

      {(name.includes('Atari') || name.includes('Jaguar')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoAtari />
        </div>
      )}

      {name.includes('Dreamcast') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoDreamcast />
        </div>
      )}

      {name.includes('Neo Geo') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoNeoGeo />
        </div>
      )}

      {(name.includes('Genesis') ||
        name.includes('SEGA') ||
        name.includes('Game Gear')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoSega />
        </div>
      )}
    </div>
  );
}

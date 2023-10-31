import LogoAndroid from '../logos/LogoAndroid';
import LogoIos from '../logos/LogoIos';
import LogoNintendo from '../logos/LogoNintendo';
import LogoPc from '../logos/LogoPc';
import LogoPlaystation from '../logos/LogoPlaystation';
import LogoXbox from '../logos/LogoXbox';

export default function PlatformsLogo({ platformData }) {
  const { name } = platformData;

  return (
    <div>
      {name.includes('PC') && (
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

      {name.includes('Nintendo') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoNintendo />
        </div>
      )}

      {name.includes('Android') && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoAndroid />
        </div>
      )}

      {(name.includes('iOS') || name.includes('Apple')) && (
        <div className="flex h-[1.2rem] w-[1.2rem]">
          <LogoIos />
        </div>
      )}
    </div>
  );
}

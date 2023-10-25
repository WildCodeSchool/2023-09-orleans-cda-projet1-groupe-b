import { PlatformsLogos } from './platformsLogos';

export default function PlatformsList({ game, isLoaded }) {
  return (
    <>
      <ul className="flex items-center gap-2">
        {isLoaded ? (
          game.parent_platforms.map(({ platform }, platformIndex) => (
            <li key={platformIndex}>{PlatformsLogos(platform)}</li>
          ))
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </ul>
    </>
  );
}

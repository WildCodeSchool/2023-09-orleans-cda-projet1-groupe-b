import { platformsLogos } from './platformsLogos';

export default function PlatformsList({ game, isLoaded }) {
  return (
    <>
      <ul className="flex items-center gap-1">
        {isLoaded ? (
          game.parent_platforms.map((platform, platformIndex) => (
            <li key={platformIndex}>{platformsLogos(platform.platform)}</li>
          ))
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </ul>
    </>
  );
}

const playStationPlatforms = [];
const nintendoPlatforms = [];
const xboxPlatforms = [];
const retroPlatforms = [];

platforms.filter((platform) => {
  if (platform.name.includes('Play') || platform.name.includes('PS')) {
    playStationPlatforms.push(platform);
  }
});

export const filteredPlayStation = playStationPlatforms.sort();

platforms.filter((platform) => {
  if (
    platform.name.includes('Nin') ||
    platform.name.includes('NES') ||
    platform.name.includes('Game B') ||
    platform.name.includes('Wii')
  ) {
    nintendoPlatforms.push(platform);
  }
});

export const filteredNintendo = nintendoPlatforms.sort((a, b) =>
  a.name.localeCompare(b.name),
);

platforms.filter((platform) => {
  if (
    platform.name.includes('Nin') ||
    platform.name.includes('NES') ||
    platform.name.includes('Game B')
  ) {
    nintendoPlatforms.push(platform);
  }
});

export const filteredXbox = xboxPlatforms.sort((a, b) =>
  a.name.localeCompare(b.name),
);

platforms.filter((platform) => {
  if (
    platform.name.includes('Ami') ||
    platform.name.includes('Ata') ||
    platform.name.includes('Cla') ||
    platform.name.includes('Com') ||
    platform.name.includes('SEGA') ||
    platform.name.includes('Genesis') ||
    platform.name.includes('Dream') ||
    platform.name.includes('Jaguar') ||
    platform.name.includes('Game G')
  ) {
    retroPlatforms.push(platform);
  }
});

export const filteredRetro = retroPlatforms.sort((a, b) =>
  a.name.localeCompare(b.name),
);

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/';

// Fonction de base pour fetcher une API qui prend en paramètre le lien de l'API
const fetchData = (url) => {
  try {
    const response = fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network Error !');
    }
  } catch (error) {
    throw new Error(`Unable to load API : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * la liste de tous les jeux vidéos,
 * la liste de tous les jeux vidéos par catégories,
 * la liste de tous les jeux vidéos par plateformes,
 * la liste de tous les jeux vidéos par créateur,
 * la liste de tous les jeux vidéos par développeur,
 * à partir d'un paramètre par page
 **/
export const fetchAsyncGames = (parameter, pageId, setter, property) => {
  const url = `${BASE_URL}${parameter}?${API_KEY}&page=${pageId}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load video game list : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une catégorie
 * à partir de l'ID de la catégorie
 **/
export const fetchAsyncCategoryDetails = (categoryId, setter, property) => {
  const url = `${BASE_URL}genres/${categoryId}?${API_KEY}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load category information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une platforme,
 * à partir de l'ID de la plateforme
 **/
export const fetchAsyncPlatformDetails = (platformId, setter, property) => {
  const url = `${BASE_URL}platforms/${platformId}?${API_KEY}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load platform information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une platforme,
 * à partir de l'ID de la plateforme
 **/
export const fetchAsyncCreatorDetails = (creatorId, setter, property) => {
  const url = `${BASE_URL}creators/${creatorId}?${API_KEY}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load creator information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'un developpeur,
 * à partir de l'ID d'un developpeur
 **/
export const fetchAsyncDeveloperDetails = (developerId, setter, property) => {
  const url = `${BASE_URL}creators/${developerId}?${API_KEY}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load developer information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'un jeux vidéo,
 * à partir de l'ID d'un jeux vidéo
 **/
export const fetchAsyncGameDetails = (gameId, setter, property) => {
  const url = `${BASE_URL}games/${gameId}?${API_KEY}`;
  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load video game information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les screenshoots,
 * les DLC,
 * l'équipe de développement,
 * la liste de jeux de la même série,
 * les liens des magasins de ventes,
 * les succès (trophées),
 * les trailers vidéos,
 * à partir d'un paramètre par l'ID du jeux vidéo
 **/
export const fetchAsyncGameElements = (parameter, gameId, setter, property) => {
  const url = `${BASE_URL}games/${gameId}/${parameter}?${API_KEY}`;

  try {
    const data = fetchData(url);
    setter(data[property]);
  } catch (error) {
    console.error(`Unable to load elements : ${error}`);
  }
};

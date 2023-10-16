const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/';

// Fonction de base pour fetcher une API qui prend en paramètre le lien de l'API
const fetchData = async (url, signal) => {
  try {
    const response = await fetch(url, { signal });
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
export const fetchGames = async ({
  parameter,
  setter,
  loading,
  signal,
  queryString = null,
}) => {
  let url = `${BASE_URL}${parameter}?key=${API_KEY}`;

  if (queryString) {
    url += `&${queryString}`;
  }

  try {
    const data = await fetchData(url, signal);
    loading(true), setter(data);
  } catch (error) {
    throw new Error(`Unable to load video game list : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une catégorie
 * à partir de l'ID de la catégorie
 **/
export const fetchCategoryDetails = async ({
  categoryId,
  setter,
  loading,
  signal,
}) => {
  const url = `${BASE_URL}genres/${categoryId}?key=${API_KEY}`;

  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load category information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une platforme,
 * à partir de l'ID de la plateforme
 **/
export const fetchPlatformDetails = async ({
  platformId,
  setter,
  loading,
  signal,
}) => {
  const url = `${BASE_URL}platforms/${platformId}?key=${API_KEY}`;

  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load platform information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'une platforme,
 * à partir de l'ID de la plateforme
 **/
export const fetchCreatorDetails = async ({
  creatorId,
  setter,
  loading,
  signal,
}) => {
  const url = `${BASE_URL}creators/${creatorId}?key=${API_KEY}`;

  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load creator information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'un developpeur,
 * à partir de l'ID d'un developpeur
 **/
export const fetchDeveloperDetails = async ({
  developerId,
  setter,
  loading,
  signal,
}) => {
  const url = `${BASE_URL}creators/${developerId}?key=${API_KEY}`;

  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load developer information : ${error}`);
  }
};

/** Fonction qui utilise fetchData pour charger :
 * les détails d'un jeux vidéo,
 * à partir de l'ID d'un jeux vidéo
 **/
export const fetchGameDetails = async ({ gameId, setter, loading, signal }) => {
  const url = `${BASE_URL}games/${gameId}?key=${API_KEY}`;
  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load video game information : ${error}`);
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
export const fetchGameElements = async ({
  parameter,
  gameId,
  setter,
  loading,
  signal,
}) => {
  const url = `${BASE_URL}games/${gameId}/${parameter}?key=${API_KEY}`;

  try {
    const data = await fetchData(url, signal);
    loading(true);
    setter(data);
  } catch (error) {
    throw new Error(`Unable to load elements : ${error}`);
  }
};

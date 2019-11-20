const capitalizeCache = {};
export const capitalize = s => {
  if (typeof s !== 'string') return '';
  if (capitalizeCache[s]) return capitalizeCache[s];
  capitalizeCache[s] = s.charAt(0).toUpperCase() + s.slice(1);
  return capitalizeCache[s];
};

const idCache = {};
export const getIdFromUrl = url => {
  if (idCache[url]) return idCache[url];
  const splitUrl = url.split('/');
  idCache[url] = splitUrl[splitUrl.length - 2];
  return idCache[url];
};

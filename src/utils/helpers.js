import queryString from 'query-string';

export const dataFromUrl = (url) => {
  const queryParams = queryString.extract(url);
  return queryString.parse(queryParams);
};

export const screenFromDeepLink = (link) => {
  const route = link.replace(/.*?:\/\//g, '');
  return route.split('/')[0];
};

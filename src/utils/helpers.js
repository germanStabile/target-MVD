import queryString from 'query-string';

export const dataFromUrl = (url) => {
  const queryParams = queryString.extract(url);
  return queryString.parse(queryParams);
};

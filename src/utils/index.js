// @flow
export const getId = (url: string): string => {
  const url2 = url.slice(0, url.lastIndexOf('/'));

  return url2.slice(url2.lastIndexOf('/') + 1);
};

export const capitalizeFirstLetter = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

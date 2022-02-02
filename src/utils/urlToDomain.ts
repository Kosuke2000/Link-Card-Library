// URLからドメイン部分を抽出
// ex. https://hoge.com/foo/bar → hoge.com
// export const urlToDomain = (pageUrl: string) => {
//   const secondSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 1);
//   const thirdSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 2);

//   return pageUrl.substring(secondSlash + 1, thirdSlash);
// };

export const removePath = (pageUrl: string) => {
  const thirdSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 2);

  return pageUrl.substring(0, thirdSlash);
};

export const removeScheme = (pageUrl: string) => {
  const secondSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 1);

  return pageUrl.substring(secondSlash + 1);
};

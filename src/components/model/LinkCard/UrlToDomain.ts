// URLからドメイン部分を抽出
// ex. https://hoge.com/foo/bar → hoge.com
export const urlToDomain = (pageUrl: string) => {
  const secondSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 1);
  const thirdSlash = pageUrl.indexOf("/", pageUrl.indexOf("/") + 2);

  return pageUrl.substring(secondSlash + 1, thirdSlash);
};

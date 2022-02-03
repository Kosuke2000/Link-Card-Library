/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "@/utils/urlToDomain";

export const ZennStyleLinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const m = faviconUrl ? "ml-2" : "";
  const wl = ogImgUrl ? `calc(100% - 8rem)` : "100%";

  return (
    <article className="flex justify-between w-full max-w-3xl h-32 rounded-lg border border-blue-100 border-solid">
      <div
        className="flex flex-col justify-around p-5 w-1/6 hover:bg-blue-50 rounded-l-lg hover:rounded-l-lg"
        style={{ width: wl }}
      >
        <h3 className="text-xl font-semibold truncate">{title}</h3>
        <p className="overflow-hidden max-h-10 text-sm text-gray-500">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={`text-sm truncate font-normal ${m}`}>
            {urlToDomain(pageUrl)}
          </p>
        </div>
      </div>
      {ogImgUrl && (
        <img
          src={ogImgUrl}
          className="object-cover w-32 h-32 rounded-r-lg"
          alt=""
        />
      )}
    </article>
  );
};

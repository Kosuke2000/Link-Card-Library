/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

// Presentational Component for Desktop
export const NotionStyleLinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const w = ogImgUrl ? "w-full sm:w-3/5" : "w-full";
  const ml = faviconUrl ? "ml-2" : "";

  return (
    <article className="flex justify-between w-full max-w-3xl h-32 rounded border border-gray-300 border-solid">
      <div
        className={`flex overflow-hidden flex-col justify-between p-5 py-4 ${w}`}
      >
        <h3 className="text-lg truncate">{title}</h3>
        <p className="overflow-hidden max-h-8 text-sm leading-4 text-gray-500">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-5" alt="" />}
          <p className={`text-sm truncate ${ml}`}>{pageUrl}</p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="hidden sm:block sm:w-2/5">
          <img src={ogImgUrl} className="object-cover w-full h-32" alt="" />
        </div>
      )}
    </article>
  );
};

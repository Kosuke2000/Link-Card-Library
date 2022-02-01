/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

// Presentational Component for Desktop
export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const w = ogImgUrl ? "w-full md:w-3/5" : "w-full";
  const ml = faviconUrl ? "ml-2" : "";

  return (
    <article className="flex justify-between w-full max-w-3xl h-40 rounded border border-gray-400 border-solid">
      <div
        className={`flex flex-col justify-between p-5  hover:bg-gray-100 ${w}`}
      >
        <h3 className="text-2xl truncate">{title}</h3>
        <p className="overflow-hidden h-12 text-base text-gray-500">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-6" alt="" />}
          <p className={`text-base truncate ${ml}`}>{pageUrl}</p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="hidden w-2/5 h-full rounded md:block">
          <img src={ogImgUrl} className="object-cover w-full h-full" alt="" />
        </div>
      )}
    </article>
  );
};

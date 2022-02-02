/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "@/utils/urlToDomain";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const m = faviconUrl ? "ml-2" : "";
  const w = ogImgUrl ? "w-full md:w-3/5" : "w-full";

  return (
    <article className="flex justify-between w-full max-w-2xl h-32 border border-gray-200 border-solid md:h-40">
      <div
        className={`flex overflow-hidden flex-col justify-around md:justify-between p-8 px-5 hover:bg-gray-100 ${w}`}
      >
        <h1 className="overflow-hidden max-h-12 text-xl font-medium leading-5 text-ellipsis md:leading-6">
          {title}
        </h1>
        <p className="hidden text-sm text-gray-400 truncate md:block">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={`text-sm truncate ${m}`}>{urlToDomain(pageUrl)}</p>
        </div>
      </div>
      <div className="min-w-max md:w-2/5">
        <img
          src={ogImgUrl}
          className="object-cover w-32 h-32 md:w-full md:h-40"
          alt=""
        />
      </div>
    </article>
  );
};

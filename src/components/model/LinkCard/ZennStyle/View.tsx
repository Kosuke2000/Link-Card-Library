/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const m = faviconUrl ? "ml-2" : "";

  return (
    <article className="flex justify-between w-full max-w-3xl h-36 rounded-xl border border-blue-100 border-solid">
      <div
        className="flex flex-col justify-between p-5 "
        style={{ width: `calc(100% - 9rem)` }}
      >
        <h3 className="text-xl truncate">{title}</h3>
        <p className="overflow-hidden h-10 text-sm text-gray-400">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={`text-sm truncate ${m}`}>{pageUrl}</p>
        </div>
      </div>
      {ogImgUrl && (
        <img
          src={ogImgUrl}
          className="object-cover w-36 h-36 rounded-r-xl"
          alt=""
        />
      )}
    </article>
  );
};

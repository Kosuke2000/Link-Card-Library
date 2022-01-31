/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "../UrlToDomain";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="flex justify-between h-40 border border-gray-200 border-solid">
      <div className="flex flex-col justify-between p-9 pl-5 w-3/5">
        <h1 className="text-xl font-medium truncate">{title}</h1>
        <p className="text-sm text-gray-400 truncate">{description}</p>
        <p className="text-xs font-light">{urlToDomain(pageUrl)}</p>
      </div>
      <div className="w-2/5 h-40">
        <img src={ogImgUrl} className="object-cover h-full" alt="" />
      </div>
    </article>
  );
};

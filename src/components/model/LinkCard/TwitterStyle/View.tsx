/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "@/utils/urlToDomain";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="w-full max-w-lg rounded-xl border border-slate-300 border-solid">
      <img
        src={ogImgUrl}
        className="object-cover w-full h-48 rounded-t-xl md:h-60"
        alt=""
      />
      <div className="overflow-hidden p-3 w-full max-h-32 hover:bg-gray-100">
        <p className="text-xs text-gray-500">{urlToDomain(pageUrl)}</p>
        <h2 className=" truncate">{title}</h2>
        <p className="overflow-hidden max-h-10 text-base leading-5 text-gray-500 ">
          {description}
        </p>
      </div>
    </article>
  );
};

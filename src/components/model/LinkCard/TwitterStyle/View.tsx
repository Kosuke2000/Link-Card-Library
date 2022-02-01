/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "@/utils/urlToDomain";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="w-96 rounded-xl border border-slate-300 border-solid">
      <img
        src={ogImgUrl}
        className="object-cover w-full h-60 rounded-t-xl"
        alt=""
      />
      <div className="p-3 w-full ">
        <p className="text-gray-500">{urlToDomain(pageUrl)}</p>
        <h2 className="truncate">{title}</h2>
        <p className="overflow-hidden h-12 text-base text-gray-500 ">
          {description}
        </p>
      </div>
    </article>
  );
};

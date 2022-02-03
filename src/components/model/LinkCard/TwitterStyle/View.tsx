/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { urlToDomain } from "@/utils/urlToDomain";

export const TwitterStyleLinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="w-full max-w-lg rounded-xl border border-gray-300 border-solid">
      <img
        src={ogImgUrl}
        className="object-cover w-full h-48 rounded-t-xl md:h-60"
        alt=""
      />
      <div className="flex overflow-hidden flex-col justify-around p-3 w-full max-h-32 hover:bg-gray-100">
        <p className="text-sm text-gray-600">{urlToDomain(pageUrl)}</p>
        <h2 className="font-semibold truncate">{title}</h2>
        <p className="overflow-hidden max-h-10 text-base font-semibold leading-5 text-gray-500 text-ellipsis">
          {description}
        </p>
      </div>
    </article>
  );
};

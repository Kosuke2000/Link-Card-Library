/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

import { removePath } from "@/utils/urlToDomain";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="flex justify-between w-full max-w-4xl h-32 border border-blue-100 border-solid">
      <div
        className="flex flex-col justify-center p-5 max-h-32"
        style={{ width: `calc(100% - 128px)` }}
      >
        <h3 className="overflow-hidden max-h-14 text-xl font-medium leading-7">
          {title}
        </h3>
        <p className="text-sm truncate ">{removePath(pageUrl)}</p>
      </div>
      {ogImgUrl && (
        <div className="h-full md:w-1/3">
          <img
            src={ogImgUrl}
            className="object-cover w-32 h-32 md:w-full"
            alt=""
          />
        </div>
      )}
    </article>
  );
};

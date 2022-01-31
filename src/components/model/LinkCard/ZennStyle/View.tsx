/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { OgpData } from "@/types/LinkCard";

interface LinkCardViewProps {
  ogp: OgpData;
}

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="flex justify-between w-full h-36 rounded-xl border border-blue-100 border-solid">
      <div
        className={`flex flex-col justify-between  py-6  pl-8 pr-20  hover:bg-gray-100 hover:rounded-l-xl w-5/6`}
      >
        <h3 className="text-xl truncate">{title}</h3>
        <p className="overflow-hidden text-sm text-gray-400">{description}</p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={`text-sm truncate ml-2`}>{pageUrl}</p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="w-1/6 h-full rounded">
          <img
            src={ogImgUrl}
            className="object-cover w-full h-full rounded-r-xl"
            alt=""
          />
        </div>
      )}
    </article>
  );
};

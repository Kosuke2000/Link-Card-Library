/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { NoteStyleLinkCardView } from "./View";

export const NoteStyle: VFC = () => (
  <LinkCardContainerC
    name="Note Style"
    View={NoteStyleLinkCardView}
    code={NOTE_STYLE_CODE}
  />
);

const NOTE_STYLE_CODE = `export const NoteStyleLinkCardView: VFC<LinkCardViewProps> = ({
  ogp,
  showCode,
}) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const m = faviconUrl ? "ml-2" : "";
  const w = ogImgUrl ? "w-full md:w-3/5" : "w-full";

  return (
    <article
      onClick={showCode}
      className="flex justify-between w-full max-w-2xl h-32 rounded border border-gray-200 hover:border-gray-400 border-solid md:h-40"
    >
      <div
        className={\`flex overflow-hidden flex-col justify-evenly max-h-30 p-3 \${w}\`}
      >
        <h1 className="overflow-hidden max-h-12 text-xl font-medium leading-6 text-ellipsis ">
          {title}
        </h1>
        <p className="overflow-hidden max-h-8 text-sm font-extralight leading-4 text-gray-600 md:block">
          {description}
        </p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={\`text-xs font-light truncate \${m}\`}>
            {urlToDomain(pageUrl)}
          </p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="min-w-max md:w-2/5">
          <img
            src={ogImgUrl}
            className="object-cover w-32 h-32 rounded-r md:w-full md:h-40"
            alt=""
          />
        </div>
      )}
    </article>
  );
};`;

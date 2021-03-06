/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { QiitaStyleLinkCardView } from "./View";

export const QittaStyle: VFC = () => (
  <LinkCardContainerC
    name="Qiita Style"
    View={QiitaStyleLinkCardView}
    code={QIITA_STYLE_CODE}
  />
);

const QIITA_STYLE_CODE = `export const QiitaStyleLinkCardView: VFC<LinkCardViewProps> = ({
  ogp,
}) => {
  const { title, pageUrl, ogImgUrl } = ogp;

  return (
    <article
      className="flex justify-between w-full max-w-3xl h-32 border border-gray-200 border-solid"
    >
      <div className="flex overflow-hidden flex-col justify-center p-5">
        <h3 className="overflow-hidden mb-1 max-h-12 text-lg font-medium leading-6">
          {title}
        </h3>
        <p className="text-xs font-light truncate">{removePath(pageUrl)}</p>
      </div>
      {ogImgUrl && (
        <div className="min-w-max h-full md:w-1/3">
          <img
            src={ogImgUrl}
            className="object-cover w-32 h-32 md:w-full"
            alt=""
          />
        </div>
      )}
    </article>
  );
};`;

import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { HatebuStyleLinkCardView } from "./View";

export const HatebuStyle: VFC = () => (
  <LinkCardContainerC
    name="Hatebu Style"
    View={HatebuStyleLinkCardView}
    code={HATEBU_STYLE_CODE}
  />
);

const HATEBU_STYLE_CODE = `export const HatebuStyleLinkCardView: VFC<LinkCardViewProps> = ({
  ogp,
}) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;
  const m = faviconUrl ? "ml-1" : "";
  const pr = ogImgUrl ? "pr-2" : "";

  return (
    <article
      className="flex justify-between p-3 w-full max-w-lg h-36 rounded-sm border border-gray-200 border-solid"
    >
      <div
        className={\`flex overflow-hidden flex-col justify-between w-full \${pr}\`}
      >
        <div className="overflow-hidden max-h-28">
          <h3 className="overflow-hidden mb-1 max-h-12 text-xl font-medium leading-6 text-ellipsis">
            {title}
          </h3>
          <p className="overflow-hidden text-xs font-light text-ellipsis">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p
            className={\`text-xs font-light text-gray-500 fonst-sm truncate \${m}\`}
          >
            {urlToDomain(pageUrl)}
          </p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="min-w-max ">
          <img
            src={ogImgUrl}
            className="object-cover w-20 h-20 sm:w-24 sm:h-24"
            alt=""
          />
        </div>
      )}
    </article>
  );
};
`;

/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { mockOgpData } from "@/mocks/LinkCard";
import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { LinkCardView } from "./View";

export const NOTION_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Notion style",
  data: mockOgpData,
  code: "code",
};

export const NotionStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <div>
      <h1>{linkCardName}</h1>
      <LinkCardView ogp={data} />
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};

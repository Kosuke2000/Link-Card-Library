/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard } from "@/types/LinkCard";
import { LinkCardProps } from "@/types/LinkCard";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardContainer } from "../LinkCardContainer";
import { NotionStyleLinkCardView } from "./View";

export const NOTION_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Notion style",
  data: mockOgpData,
  code: "code",
};

export const NotionStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <LinkCardContainer linkCardName={linkCardName} code={code}>
      <NotionStyleLinkCardView ogp={data} />
    </LinkCardContainer>
  );
};

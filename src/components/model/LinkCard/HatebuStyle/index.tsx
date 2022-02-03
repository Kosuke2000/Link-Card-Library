/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardContainer } from "../LinkCardContainer";
import { HatebuStyleLinkCardView } from "./View";

export const HATEBU_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Hatebu style",
  data: mockOgpData,
  code: "code",
};

export const HatebuStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <LinkCardContainer linkCardName={linkCardName} code={code}>
      <HatebuStyleLinkCardView ogp={data} />
    </LinkCardContainer>
  );
};

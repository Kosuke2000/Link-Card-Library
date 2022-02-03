/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardContainer } from "../LinkCardContainer";
import { NoteStyleLinkCardView } from "./View";

export const NOTE_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Note style",
  data: mockOgpData2,
  code: "code",
};

export const NoteStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <LinkCardContainer linkCardName={linkCardName} code={code}>
      <NoteStyleLinkCardView ogp={data} />
    </LinkCardContainer>
  );
};

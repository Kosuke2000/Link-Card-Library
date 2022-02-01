/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export const TWITTER_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Twitter style",
  data: mockOgpData2,
  code: "code",
};

export const TwitterStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <div>
      <h1>{linkCardName}</h1>
      <LinkCardView ogp={data} />
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};

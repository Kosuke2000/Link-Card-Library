/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export const HATEBU_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Hatebu style",
  data: mockOgpData,
  code: "code",
};

export const HatebuStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <div className="flex flex-col items-center w-full">
      <h1>{linkCardName}</h1>
      <LinkCardView ogp={data} />
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};

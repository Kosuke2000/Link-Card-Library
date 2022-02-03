/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardContainer } from "../LinkCardContainer";
import { QiitaStyleLinkCardView } from "./View";

export const QIITA_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "QiitaStyle style",
  data: mockOgpData,
  code: "code",
};

export const QiitaStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <LinkCardContainer linkCardName={linkCardName} code={code}>
      <QiitaStyleLinkCardView ogp={data} />
    </LinkCardContainer>
  );
};

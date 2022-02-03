import { VFC } from "react";

import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardContainer } from "../LinkCardContainer";
import { ZennStyleLinkCardView } from "./View";

export const ZENN_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Zenn style",
  data: mockOgpData,
  code: "code",
};

export const ZennStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <LinkCardContainer linkCardName={linkCardName} code={code}>
      <ZennStyleLinkCardView ogp={data} />
    </LinkCardContainer>
  );
};

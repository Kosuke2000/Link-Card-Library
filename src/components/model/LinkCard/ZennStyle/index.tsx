import { VFC } from "react";

import { mockOgpData } from "@/mocks/LinkCard";
import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { LinkCardView } from "./View";

export const ZENN_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "Zenn style",
  data: mockOgpData,
  code: "code",
};

export const ZennStyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <div className="">
      <h1>{linkCardName}</h1>
      <LinkCardView ogp={data} />
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};

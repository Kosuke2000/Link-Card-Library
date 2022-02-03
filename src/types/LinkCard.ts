export type OgpData = {
  title: string;
  description: string;
  faviconUrl: string;
  pageUrl: string;
  ogImgUrl: string;
};

export type LinkCard = {
  linkCardName: string;
  data: OgpData;
  code: string;
};

export type LinkCardContainerProps = Pick<LinkCard, "linkCardName" | "code">;

export interface LinkCardViewProps {
  ogp: OgpData;
}

export interface LinkCardProps {
  linkCard: LinkCard;
}

export interface LinkCardListProps {
  linkCards: LinkCard[];
}

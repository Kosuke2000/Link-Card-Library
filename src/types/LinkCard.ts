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

export interface LinkCardViewProps {
  ogp: OgpData;
}

export interface LinkCardProps {
  linkCard: LinkCard;
}

export interface LinkCardListProps {
  linkCards: LinkCard[];
}

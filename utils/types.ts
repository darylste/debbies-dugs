export type sanityImg = {
  _type: string;
  alt: string;
  asset: object;
  height: number;
  width: number;
};

export interface IHeroProps {
  title: string;
  text: string;
  ctaBtnText: string;
  ctaBtnLink: string;
  outlineBtnText: string;
  outlineBtnLink: string;
  img: sanityImg;
}

export interface IAboutProps {
  title: string;
  text: string[];
  btnText: string;
  btnUrl: string;
  img: sanityImg;
}

export interface IReviewSectionProps {
  title: string;
  cards: IReviewCardProps[];
}

export type rate = 'day' | 'week' | 'night';

export interface ICardProps {
  title: string;
  body: string;
  list: string[];
  price: number;
  rate: rate;
}
export interface IReviewCardProps {
  title: string;
  text: string;
  rating: number;
}

export interface IFooterListProps {
  title: string;
  list: string[];
}

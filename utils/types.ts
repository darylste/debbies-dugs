export interface GalleryImg {
  src: string;
  alt: string;
}

export type rate = 'day' | 'week' | 'night';

export interface ICardProps {
  title: string;
  body: string;
  list: string[];
  price: number;
  rate: rate;
}

export interface IServicesSectionProps {
  title: string;
  cards: ICardProps[];
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

export interface HomeType {
  subTitle: string;
  title: string;
  description: string;
}

export interface DestinationType {
  name: string;
  images: ImagesType;
  description: string;
  distance: string;
  travel: string;
  id: string;
}

export interface CrewType {
  name: string;
  images: ImagesType;
  role: string;
  bio: string;
  id: string;
}

export interface TechnologyType {
  name: string;
  images: TechImagesType;
  description: string;
  id: string;
}

interface ImagesType {
  png: string;
  webp: string;
}

interface TechImagesType {
  portrait: string;
  landscape: string;
}

export enum DirectionXType {
  LEFT = "left",
  RIGHT = "right",
}

export enum DirectionYType {
  TOP = "top",
  BOTTOM = "bottom",
}

export type Personality = Mode & {
  type: string;
}

export type Mode = {
  id: string;
  title: string;
  img: string;
};

export type Article = {
  like_count: number;
  articleid: string;
  type: string;
  share_url: string;
  title: string;
  image: string;
  author: string;
  seencount: number;
  description: string;
  time: number;
  type_disp: string;
  order: number;
};

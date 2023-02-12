export interface IMusic {
  id: string;
  title: string;
  url: string;
  albumart: string;
  likes?: number;
}

export interface IPhoto {
  id: string;
  caption: string;
  url: string;
  likes?: number;
}

export interface ITour {
  id: string;
  venue: string;
}

export interface IVideo {
  id: string;
  title: string;
  thumb_nail: string;
  url: string;
  likes?: number;
}

export interface IComment {
  id?: string;
  message: string;
}

export interface IFeedback {
  id: string;
  userId: string;
  videoId: string;
  mediaType: string;
  comment: String;
  likes?: number;
}

export type Song = {
  id: number;
  name: string;
  artist: string[] | string;
  songSrc: string;
};

export type RadioStation = {
  id: number;
  name: string;
  imageSrc: string;
  songs: Song[];
};

export type RadioStations = RadioStation[];

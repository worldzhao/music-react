export interface BannerResponse {
  banners: {
    imageUrl: string;
    url: string | null;
  }[];
}

export interface NewestAlbumResponse {
  albums: { name: string; id: number; picUrl: string; artist: { name: string; id: number } }[];
}

export interface RecommendState {
  banners: BannerResponse['banners'] | null;
  newestAlbums: NewestAlbumResponse['albums'] | null;
}

export interface BannerResponse {
  code: number;
  banners: {
    imageUrl: string;
    url: string | null;
  }[];
}

export interface NewestAlbumResponse {
  code: number;
  albums: { name: string; id: number; picUrl: string; artist: { name: string; id: number } }[];
}

export interface RecommendState {
  banners: BannerResponse['banners'];
  newestAlbums: NewestAlbumResponse['albums'];
}

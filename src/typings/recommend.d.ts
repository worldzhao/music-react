export interface BannerResponse {
  code: number;
  banners: {
    imageUrl: string;
    url: string | null;
  }[];
}

interface RecommendState {
  banners: BannerResponse['banners'];
}

import { getBanner, getNewestAlbum } from '@/services';
import { RecommendState } from '@/typings';
import produce from 'immer';

export default {
  state: ({
    banners: [],
    newestAlbums: []
  } as any) as RecommendState,

  effects: {
    async getBannerAsync() {
      const res = await getBanner();
      this.getBanner(res);
    },

    async getNewestAlbumAsync() {
      const res = await getNewestAlbum();
      this.getNewestAlbum(res);
    }
  },

  reducers: {
    getBanner(state: RecommendState, payload: RecommendState['banners']) {
      return produce(state, draft => {
        draft.banners = payload;
      });
    },
    getNewestAlbum(state: RecommendState, payload: RecommendState['newestAlbums']) {
      return produce(state, draft => {
        draft.newestAlbums = payload;
      });
    }
  }
};

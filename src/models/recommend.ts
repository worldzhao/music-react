import { getBanner } from '@/services';
import { RecommendState } from '@/typings';
import produce from 'immer';

export default {
  state: {
    banners: []
  },

  effects: {
    async getBannerAsync() {
      const res = await getBanner();
      this.getBanner(res);
    }
  },

  reducers: {
    getBanner(state: RecommendState, payload: RecommendState['banners']) {
      return produce(state, draft => {
        draft.banners = payload;
      });
    }
  }
};

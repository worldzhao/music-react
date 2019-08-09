import { getUser, postUser } from '@/services';
import { GetUserParams, PostUserParams, DemoModelState } from '@/typings';

export default {
  state: ({
    userDataGet: null,
    userDataPost: null
  } as any) as DemoModelState,

  effects: {
    async getUserAsync(payload: GetUserParams) {
      const res = await getUser(payload);
      this.getUser(res);
    },
    async postUserAsync(payload: PostUserParams) {
      const res = await postUser(payload);
      this.postUser(res);
    }
  },

  reducers: {
    getUser(state: DemoModelState, payload: DemoModelState['userDataGet']) {
      return {
        ...state,
        userDataGet: payload
      };
    },

    postUser(state: DemoModelState, payload: DemoModelState['userDataPost']) {
      return {
        ...state,
        userDataPost: payload
      };
    }
  }
};

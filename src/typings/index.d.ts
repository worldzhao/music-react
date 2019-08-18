import {
  RematchRootState,
  RematchDispatch,
  ModelConfig,
  ModelEffects,
  Models
} from '@rematch/core';

import * as models from '@/models';

// rematch 相关类型定义
export type models = typeof models;

export type Dispatch = RematchDispatch<models>;

export type ExtractRematchLoadingFromEffects<
  effects extends ModelConfig['effects']
> = effects extends ((...args: any[]) => infer R)
  ? R extends ModelEffects<any>
    ? ExtractRematchLoadingFromEffectsObject<R>
    : {}
  : effects extends ModelEffects<any>
  ? ExtractRematchLoadingFromEffectsObject<effects>
  : {};

export type ExtractRematchLoadingFromEffectsObject<effects extends ModelEffects<any>> = {
  [effectKey in keyof effects]: boolean;
};

interface LoadingState<M extends Models> {
  loading: {
    global: boolean;
    models: { [k in keyof M]: boolean };
    effects: { [k in keyof M]: ExtractRematchLoadingFromEffects<M[k]['effects']> };
  };
}

export type RootState = RematchRootState<models> & LoadingState<models>;

// response 结构
export type Response<T> = {
  [P in keyof T]: T[P];
} & { code: number };

// recommend页面相关类型定义
export { RecommendState, BannerResponse, NewestAlbumResponse } from './recommend';

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

// response wrapper
export interface Response<T> {
  code: number;
  msg: string;
  data: T;
}

// demo页面相关类型定义
export {
  GetUserParams,
  GetUserResponse,
  PostUserParams,
  PostUserResponse,
  DemoModelState
} from './demo';

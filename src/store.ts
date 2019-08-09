import { init } from '@rematch/core';
import * as models from './models';
import createLoadingPlugin from '@rematch/loading';

export const store = init({
  models,
  plugins: [createLoadingPlugin({})]
});

export { models };

import { createStore } from 'vuex';
import getters from './getters';

const modulesFiles: Object = import.meta.globEager('./modules/*.ts');

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = Object.entries(modulesFiles).map((item) => ({
  [item[0].split('/')[2].split('.')[0]]: item[1],
}));

const store = createStore({
  ...modules,
  getters,
});

export default store;

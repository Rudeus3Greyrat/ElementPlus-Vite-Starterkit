import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

//按需引入element-plus插件
import { useElementPlus } from './config/elementPlus';

const app = createApp(App);

useElementPlus(app);
app.use(store);
app.use(router);

app.mount('#app');

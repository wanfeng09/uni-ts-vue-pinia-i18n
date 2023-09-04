import { createSSRApp } from "vue";
import { createPinia } from 'pinia';
import persist from "pinia-plugin-persistedstate";
// 国际化
import i18n from '@/locale/index'
// 公共样式
import '@/style/custom.scss';
import App from "./App.vue";
// 创建pinia
const pinia = createPinia()
// 引用持久化插件
pinia.use(persist)

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(i18n)
  return {
    app
  };
}
 
import { createSSRApp } from "vue";
import { createPinia } from 'pinia';
// 公共样式
import '@/style/custom.scss';
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  return {
    app,
  };
}

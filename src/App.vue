<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useI18n } from 'vue-i18n';
onLaunch(() => {
  const { t } = useI18n()
  uni.setTabBarItem({
    index: 0,
    text: t('nav.title'),
    // iconPath: '/path/to/iconPath',
    // selectedIconPath: '/path/to/selectedIconPath'
  })
  uni.setTabBarItem({
    index: 1,
    text: t('nav.about'),
    // iconPath: '/path/to/iconPath',
    // selectedIconPath: '/path/to/selectedIconPath'
  })
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
/* #ifndef APP-NVUE */
// 页面高度设置100%
page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* #endif */
</style>

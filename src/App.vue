<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
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

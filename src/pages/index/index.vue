<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useLangStore } from "@/stores/index";
const { locale,t } = useI18n()
// 初始化
uni.setNavigationBarTitle({ title: t('nav.title') })
// 语言仓库
const useLang = useLangStore()
function toggleLanuage(){
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  useLang.switchLanguage(locale.value)
  uni.setNavigationBarTitle({ title: t('nav.title') })
}
</script>
<template>
  <div>{{ t('home.title') }}</div>
  <button
    hover-class="button-hover"
    @click="toggleLanuage"
  >
    {{ t('button.switch') }}
  </button>
</template>
<style scoped></style>
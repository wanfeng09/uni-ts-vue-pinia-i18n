import { defineStore } from "pinia";
import { Names } from '../storeName/index';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

export const useLangStore = defineStore(Names.Lang, () => {
    let lang = ref('zh')
    const { t } = useI18n()
    function switchLanguage(val: string) {
        lang.value = val
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
    }
    return {
        lang,
        switchLanguage
    }
}, {
    persist: {
        key: 'Lang',
        storage: {
            setItem(key: string, value: string) {
                uni.setStorageSync(key, value)
            },
            getItem(key: string) {
                return uni.getStorageSync(key)
            },
        },
    }
})
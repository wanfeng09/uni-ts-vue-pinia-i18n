import { createI18n } from "vue-i18n";
import en from './en.json'
import zh from './zh-Hans.json'

const messages = {
    en,
    zh,
}
// console.log('当前系统语言', uni.getLocale()); //  zh-Hans
const defaultLang = JSON.parse(uni.getStorageSync('Lang')).lang
// console.log('当前系统语言',defaultLang,typeof defaultLang);

const i18n = createI18n({
    locale: defaultLang || 'zh', // 当前语言
    fallbackLocale: 'zh', // 回退语言
    messages,
    legacy: false,
})

export default i18n
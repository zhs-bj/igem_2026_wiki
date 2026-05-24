// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import HomePage from '../components/HomePage.vue';
import CustomLayout from '../components/CustomLayout.vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('igem', CustomLayout)
  },

} satisfies Theme
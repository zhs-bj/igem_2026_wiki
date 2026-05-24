<template>
  <div class="custom-layout">
    <div class="page-hero" v-if="frontmatter.heroImage !== false">
      <div class="hero-content">
        <h1 class="hero-title">{{ frontmatter.title || pageTitle }}</h1>
        <p class="hero-subtitle" v-if="frontmatter.subtitle">{{ frontmatter.subtitle }}</p>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-card">
        <Content />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vitepress'
import { useData } from 'vitepress/dist/client/theme-default/composables/data.js'
import { computed } from 'vue'

const { frontmatter } = useData()
const route = useRoute()

const pageTitle = computed(() => {
  const path = route.path.replace('/fudan/', '').replace(/\/$/, '')
  return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
})
</script>

<style scoped>
.custom-layout {
  min-height: 100vh;
  background: linear-gradient(180deg, #F8FDF9 0%, #EDF7F2 100%);
}

.page-hero {
  padding: 140px 24px 60px;
  background: linear-gradient(135deg, #3A7D8C 0%, #5BA8B0 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.85);
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.content-card {
  background: white;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  border: 1px solid rgba(138, 192, 168, 0.15);
}

@media (max-width: 768px) {
  .content-card {
    padding: 28px;
    border-radius: 16px;
  }

  .page-hero {
    padding: 120px 20px 40px;
  }
}
</style>

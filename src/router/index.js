import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/portfolio/globoo',
    name: 'globoo-case',
    component: () => import('@/views/GlobooCase.vue'),
  },
  {
    path: '/portfolio/mobile',
    name: 'mobile-case',
    component: () => import('@/views/MobileCase.vue'),
  },
  {
    path: '/design-system',
    redirect: '/design-system/home', // ← redireciona para a primeira página
  },
  {
    path: '/design-system/chip',
    name: 'ds-chip',
    component: () => import('@/pages/DSChip.vue'),
  },
  {
    path: '/design-system/button',
    name: 'ds-button',
    component: () => import('@/pages/DSButtons.vue'),
  },
  {
    path: '/design-system/badge',
    name: 'ds-badge',
    component: () => import('@/pages/DSBadge.vue'),
  },
  {
    path: '/design-system/card',
    name: 'ds-card',
    component: () => import('@/pages/DSCard.vue'),
  },
  {
    path: '/design-system/navbar',
    name: 'ds-navbar',
    component: () => import('@/pages/DSNavbar.vue'),
  },
  {
    path: '/design-system/footer',
    name: 'ds-footer',
    component: () => import('@/pages/DSFooter.vue'),
  },
  {
    path: '/design-system/cta',
    name: 'ds-cta',
    component: () => import('@/pages/DSCTA.vue'),
  },
  {
    path: '/design-system/tokens',
    name: 'ds-tokens',
    component: () => import('@/pages/DSTokens.vue'),
  },
  {
    path: '/design-system/block',
    name: 'ds-block',
    component: () => import('@/pages/DSBlock.vue'),
  },
  {
    path: '/design-system',
    redirect: '/design-system/home',
  },
  {
    path: '/design-system/home',
    name: 'ds-home',
    component: () => import('@/pages/DSHome.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return new Promise((resolve) => {
        const tryScroll = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({ el: to.hash, behavior: 'smooth' })
          } else {
            setTimeout(tryScroll, 50)
          }
        }
        setTimeout(tryScroll, 50)
      })
    }

    return { top: 0 }
  },
})

export default router

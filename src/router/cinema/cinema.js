export default {
  path: '/cinema',
  component: () => import('@/views/Cinema/Cinema.vue'),
  children: [
    {
      path: '/cinema/city',
      component: () => import('@/components/City/city_switch.vue')
    },
    {
      path: '/cinema/brand',
      component: () => import('@/components/Brand/Brand.vue')
    },
    {
      path: '/cinema/feature',
      component: () => import('@/components/Feature/Feature.vue')
    }
  ]
}

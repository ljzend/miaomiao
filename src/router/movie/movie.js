export default {
  path: '/movie',
  component: () => import('@/views/Movie/Movie.vue'),
  children: [
    {
      path: '/movie/city',
      component: () => import('@/components/City/City.vue')
    },
    {
      path: '/movie/nowplaying',
      component: () => import('@/components/NowPlaying/NowPlaying.vue')
    },
    {
      path: '/movie/comingsoon',
      component: () => import('@/components/ComingSoon/ComingSoon.vue')
    },
    {
      path: '/movie/search',
      component: () => import('@/components/Search/Search.vue')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}

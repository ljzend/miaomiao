import Vue from 'vue'
import VueRouter from 'vue-router'
import mineRouter from './mine/mine.js'
import cinemaRouter from './cinema/cinema.js'
import movieRouter from './movie/movie.js'

Vue.use(VueRouter)

const routes = [
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  mineRouter,
  cinemaRouter,
  movieRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

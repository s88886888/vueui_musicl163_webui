import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from '../components/demo.vue'
import DiscoverMusic from '../Views/DiscoverMusic.vue'
import RecommendedMusic from '../Views/RecommendedMusic.vue'
import LatestMusic from '../Views/LatestMusic.vue'
import LatestMV from '../Views/LatestMV.vue'
import PlayMusicList from '../Views/PlayMusicList.vue'
import PlayMusicMV from '../Views/PlayMusicMV.vue'
import searchMusic from '../Views/searchMusic.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: "home",
    component: ()=>import('../Views/DiscoverMusic.vue'),

  },
  {
    path: '/DiscoverMusic',
    component: ()=>import('../Views/DiscoverMusic.vue'),
  },
  {
    path: '/RecommendedMusic',
    component: ()=>import('../Views/RecommendedMusic.vue'),
  },
  {
    path: '/LatestMusic',
    component: ()=>import('../Views/LatestMusic.vue'),
  },
  {
    path: '/LatestMV',
    component: ()=>import('../Views/LatestMV.vue'),
  },
  {
    path: '/PlayMusicList',
    component: ()=>import('../Views/PlayMusicList.vue'),
  },
  {
    path: '/PlayMusicMV',
    component: ()=>import('../Views/PlayMusicMV.vue'),
  },
  {
    path: '/searchMusic',
    component: ()=>import('../Views/searchMusic.vue'),
  },
  {
    path: '/logon',
    component: ()=>import('../components/demo.vue'),
  }
]
const router = new VueRouter({
  routes
})
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from '../components/demo.vue'
import DiscoverMusic from '../Views/DiscoverMusic.vue'
import RecommendedMusic from '../Views/RecommendedMusic.vue'
import LatestMusic from '../Views/LatestMusic.vue'
import LatestMV from '../Views/LatestMV.vue'
import PlayMusicList from '../Views/PlayMusicList.vue'
import PkayMusicMV from '../Views/PkayMusicMV.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: "home",
    component: demo

  },
  {
    path: '/DiscoverMusic',
    component: DiscoverMusic
  },
  {
    path: '/RecommendedMusic',
    component: RecommendedMusic
  },
  {
    path: '/LatestMusic',
    component: LatestMusic
  },
  {
    path: '/LatestMV',
    component: LatestMV
  },
  {
    path: '/PlayMusicList',
    component: PlayMusicList
  },
  {
    path: '/PkayMusicMV',
    component: PkayMusicMV
  }
]
const router = new VueRouter({
  routes
})
export default router
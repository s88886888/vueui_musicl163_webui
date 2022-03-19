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
    component: () => import('../Views/DiscoverMusic.vue'),

  },
  {
    path: '/DiscoverMusic',
    component: () => import('../Views/DiscoverMusic.vue'),
  },
  {
    path: '/RecommendedMusic',
    component: () => import('../Views/RecommendedMusic.vue'),
  },
  {
    path: '/LatestMusic',
    component: () => import('../Views/LatestMusic.vue'),
  },
  {
    path: '/LatestMV',
    component: () => import('../Views/LatestMV.vue'),
  },
  {
    path: '/PlayMusicList',
    component: () => import('../Views/PlayMusicList.vue'),
  },
  {
    path: '/PlayMusicMV',
    component: () => import('../Views/PlayMusicMV.vue'),
  },
  {
    path: '/searchMusic',
    component: () => import('../Views/searchMusic.vue'),
  },
  {
    path: '/logon',
    component: () => import('../components/demo.vue'),
  },
  {
    path: '/myLikeMusic',
    component: () => import('../Views/myLikeMusic.vue'),
  },
  {
    path: '/myMusic',
    component: () => import('../Views/myMusic.vue'),
  }





]
const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 从那个路径跳转过来
  //next 示放行

  if (to.path == '/DiscoverMusic') return next();
  if (to.path == '/RecommendedMusic') return next();
  if (to.path == '/LatestMusic') return next();
  if (to.path == '/LatestMV') return next();
  if (to.path == '/PlayMusicList') return next();
  if (to.path == '/PlayMusicMV') return next();
  if (to.path == '/searchMusic') return next();

  if (to.path == '/logon') return next();

  // 获取id
  const id = window.sessionStorage.getItem('userid');
  
  //如果没有id 回到登入
  if (!id) return next('/logon');

  //放行
  next();

})

export default router
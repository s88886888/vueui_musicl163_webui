<template>
  <div class="index-container">
    <!-- 导航区域 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/DiscoverMusic">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/RecommendedMusic">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/LatestMusic">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/LatestMV">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 播放标签 -->
    <div class="player">
      <!-- autoplay 自动播放 -->
      <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      musicUrl: "",
    };
  },
};
</script>

<style></style>

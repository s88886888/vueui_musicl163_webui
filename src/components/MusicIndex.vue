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
      <div class="player_box">
        <!-- <span><i class="el-icon-video-play"></i> {{singsong}}</span> -->
        <span>{{ singsong }}</span>
      </div>
      <audio
        :src="musicUrl"
        ref="audioDom"
        controls="controls"
        crossOrigin="anonymous"
        autoplay="autoplay"
        paused
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicUrl: "",
      singsong: "",
    };
  },
  methods: {
    //暂停
    async audioPause() {
      await this.$refs.audioDom.pause();
    },
    //播放
    //原因：
    // 从Chrome50开始，对<video>或<audio>元素的play()调用返回一个Promise。
    // 一个异步返回单个结果的函数。如果回放成功，Promise就会实现，而play事件也会同时触发，对应执行.then。
    // 如果回放失败，Promise将被拒绝，同时会有一个错误消息解释失败，对应执行.catch。
    async audioPlay() {
      await this.$refs.audioDom.load();
      let playPromise = this.$refs.audioDom.play();
    
       if (playPromise !== undefined) {
      await  playPromise
          .then(() => {
            this.$refs.audioDom.play();
          })
          .catch(() => {});
      }
    },
    //播放地址
    audioSrc(value) {
      // this.$refs.audioDom.src = value;
      this.musicUrl = value;
    },
    //地址
    audioSong(value) {
      this.singsong = value;
    },
  },
};
</script>

<style></style>

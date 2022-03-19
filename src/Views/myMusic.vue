<template>
  <div class="discovery-container">
    <div class="recommend">
      <h3 class="title">我的歌单</h3>
      <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.tags ==""? "暂无分类":item.tags }}</span>
            </div>
            <img :src="item.coverImgUrl" alt="" @click="playmusiclist(item.id)" />
            <span class="iconfont icon-play" @click="playmusiclist(item.id)">
              <i class="el-icon-video-play"></i>
            </span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 推荐歌单
      list: [],
    };
  },
  async created() {

      this.personalized();
  },
  methods: {
    async personalized() {
      const userid = window.sessionStorage.getItem("userid");
      //获取歌单
      const { data: res } = await this.$http.get("/user/playlist", {
        params: { uid: userid },
      });
      if (res.code !== 200) {
        return this.$message.error("error:歌单数据获取失败 ");
      } else {
        this.list=res.playlist;
      }
    },

    //跳转去歌单页面时间
    async playmusiclist(id) {
      if (id == "") {
        return await this.$message.error(
          "error:获取歌单失败，请检查版权...或者网络 "
        );
      } else {
        // 去搜索页 携带数据
        await this.$router.push("/PlayMusicList?q=" + id);
      }
    },
    isLogon() {
      let userid = sessionStorage.getItem("userid");
      let token = sessionStorage.getItem("token");
      if (userid != null && token != null) {
      } else {
      }
    },
  },
};
</script>

<style></style>

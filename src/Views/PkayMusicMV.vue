<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video controls :src="url"></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <!-- 头像 -->
            <img :src="icon" alt="" />
          </div>
          <!-- 歌手名 -->
          <span class="name">{{ mvInfo.artistName }}</span>
        </div>
        <div class="mv-info">
          <!-- 标题 -->
          <h2 class="title">{{ mvInfo.name }}</h2>
          <span class="date">发布：2014-11-04</span>
          <!-- 播放次数 -->
          <span class="number">播放：{{ mvInfo.playCount }}次</span>
          <!-- 描述 -->
          <p class="desc">
            {{ mvInfo.desc }}
          </p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论<span class="number">(666)</span></p>
        <div class="comments-wrap">
          <div class="item">
            <div class="icon-wrap">
              <img src="../assets/avatar.jpg" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">谁说的，长大了依旧可爱哈</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">2020-02-12 17:26:11</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <div class="comment-wrap">
        <p class="title">最新评论<span class="number">(666)</span></p>
        <div class="comments-wrap">
          <div class="item">
            <div class="icon-wrap">
              <img src="../assets/avatar.jpg" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">谁说的，长大了依旧可爱哈</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">2020-02-12 17:26:11</div>
            </div>
          </div>
          <div class="item">
            <div class="icon-wrap">
              <img src="../assets/avatar.jpg" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">谁说的，长大了依旧可爱哈</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">2020-02-12 17:26:11</div>
            </div>
          </div>
          <div class="item">
            <div class="icon-wrap">
              <img src="../assets/avatar.jpg" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">爱斯基摩：</span>
                <span class="comment">谁说的，长大了依旧可爱哈</span>
              </div>
              <div class="re-content">
                <span class="name">小苹果：</span>
                <span class="comment">还是小时候比较可爱</span>
              </div>
              <div class="date">2020-02-12 17:26:11</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
        :limit="limit"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
          <div v-for="(item, index) in simiMvs" :key="index" class="item">
            <div class="img-wrap">
              <img :src="item.cover" alt="" @click="playMusicMv(item.id)" />
              <span class="iconfont icon-play" @click="playMusicMv(item.id)">
                <i class="el-icon-video-play"></i
              ></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{ item.playCount }}</div>
              </div>
              <span class="time">{{ item.duration }}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入 axios
import axios from "axios";
export default {
  name: "mv",
  data() {
    return {
      // 总条数
      total: 20,
      // 页码
      page: 1,
      // 页容量
      limit: 10,
      // mv地址
      url: "",
      // 相关mv
      simiMvs: [],
      // mv的信息
      mvInfo: {},
      // 头像
      icon: "",
    };
  },
  created() {
    //获取视频地址
    this.getMVUrl();
    //获取相关MV
    this.getsimimv();

    // 获取 mv的信息
    this.getmvdetail();
    // 获取评论数据
    axios({
      url: "https://autumnfish.cn/comment/mv",
      method: "get",
      params: {
        id: this.$route.query.q,
        limit: 10,
        offset: 0,
      },
    }).then((res) => {
      //   console.log(res);
    });
  },
  methods: {
    // 获取mv播放地址
    async getMVUrl() {
      const { data: res } = await this.$http.get(
        "mv/url?id=" + this.$route.query.q
      );
      if (res.code !== 200) {
        return this.$message.error("error:获取页码失败 ");
      } else {
        this.url = res.data.url;
      }
    },

    // 获取 相关的mv
    async getsimimv() {
      const { data: res } = await this.$http.get(
        "simi/mv?mvid=" + this.$route.query.q
      );
      if (res.code !== 200) {
        return this.$message.error("error:获取页码失败 ");
      } else {
        this.simiMvs = res.mvs;
      }
    },

    async getmvdetail() {
      const { data: res } = await this.$http.get(
        "mv/detail?mvid=" + this.$route.query.q
      );
      if (res.code !== 200) {
        return this.$message.error("error:获取页码失败 ");
      } else {
        this.mvInfo = res.data;
        const { data: res1 } = await this.$http.get(
          "artists?id=" + this.mvInfo.artists[0].id
        );
        this.icon = res1.artist.picUrl;
      }
    },

    handleCurrentChange(val) {
      this.page = val;
    },

    //跳转去MV页面时间
    async playMusicMv(id) {
      if (id == "") {
        return await this.$message.error(
          "error:获取MV失败，请检查版权...或者网络 "
        );
      } else {
        // 去搜索页 携带数据
        await this.$router.go(0);
        await this.$router.push("/PkayMusicMV?q=" + id);
      }
    },
  },
};
</script>

<style></style>

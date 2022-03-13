<template>
  <div class="result-container">
    <div class="title-wrap">
      <!-- 标题 -->
      <h2 class="title">{{ $route.query.q }}</h2>
      <span class="sub-title">找到 {{ count }} 个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <el-table :data="songList" border style="width: 100%">
          <el-table-column
            label="序号"
            type="index"
            width="50"
          ></el-table-column>
          <el-table-column prop="name" label="歌名" width=""> </el-table-column>
          <el-table-column prop="artists[0].name" label="歌手" width="">
          </el-table-column>
          <el-table-column prop="album.name" label="专辑" width="180">
          </el-table-column>
          <el-table-column prop="duration" label="时长" width="120">
          </el-table-column>
          <el-table-column prop="" label="功能"> </el-table-column>
        </el-table>

      </el-tab-pane>

      <el-tab-pane label="歌单" name="lists">
        <div class="items">
          <div
            v-for="(item, index) in playlists"
            :key="index"
            class="item"
            @click="gotoMusicPlaylist(item.id)"
          >
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount }}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play">
                <i class="el-icon-video-play"></i
              ></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="items mv">
          <div
            v-for="(item, index) in mv"
            :key="index"
            class="item"
            @click="gotoMusicMv(item.id)"
          >
            <div class="img-wrap">
              <!-- 封面 -->
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>

              <div class="num-wrap">
                <div class="iconfont icon-play">
                  <i class="el-icon-video-play"></i>
                </div>
                <!-- 播放次数 -->
                <div class="num">{{ item.playCount }}</div>
              </div>

              <!-- 持续时间 -->
              <span class="time">{{ item.duration }}</span>
            </div>
            <div class="info-wrap">
              <!-- mv名 -->
              <div class="name">{{ item.name }}</div>
              <!-- 歌手名 -->
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tab切换时 会改变的数据
      activeIndex: "songs",
      // 保存 查询歌曲
      songList: [],
      // 保存歌单的字段
      playlists: [],
      // 保存mv的字段
      mv: [],
      // 搜索结果的总数
      count: 0,
    };
  },
  // 生命周期钩子 回调函数
  created() {
    this.getSearchMusicdata();
  },
  //页面监听事件判断 三个可切换的 页面  歌曲 歌单 mv
  //这样写很麻烦，同意的是请求三次地址 不如给三个单击的方法去判断
  //为了展示项目的多样性，用了监听器
  watch: {
    async activeIndex() {
      let type = 1;
      // 获取个数
      let limit = 10;
      // 根据样式的name 监听事件
      switch (this.activeIndex) {
        case "songs":
          type = 1;
          limit = 10;
          break;
        case "lists":
          type = 1000;
          limit = 10;
          break;
        case "mv":
          type = 1004;
          limit = 8;
          break;
        default:
          break;
      }

      const { data: res } = await this.$http.get("search", {
        params: {
          keywords: this.$route.query.q,
          type, // type:type,
          // 获取的数据量
          limit, // limit: limit}}
        },
      });
      if (res.code != 200) {
        return this.$message.error("error:请检查网络 ");
      } else {
        if (type == 1) {
          // 歌曲
          this.songList = res.result.songs;
          // 计算歌曲时间
          for (let i = 0; i < this.songList.length; i++) {
            let min = parseInt(this.songList[i].duration / 1000 / 60);
            let sec = parseInt((this.songList[i].duration / 1000) % 60);
            if (min < 10) {
              min = "0" + min;
            }
            if (sec < 10) {
              sec = "0" + sec;
            }
            // console.log(min + '|' + sec)
            this.songList[i].duration = min + ":" + sec;
          }
          // 保存总数
          this.count = res.result.songCount;
        }
        // 获取 歌单
        else if (type == 1000) {
          // 歌单的逻辑
          this.playlists = res.result.playlists;
          // 总数
          this.count = res.result.playlistCount;
          // 处理 播放次数
          for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].playCount > 100000) {
              this.playlists[i].playCount =
                parseInt(this.playlists[i].playCount / 10000) + "万";
            }
          }
        } else {
          // 保存mv数据
          this.mv = res.result.mvs;
          // 总数
          this.count = res.result.mvCount;

          // 处理数据
          for (let i = 0; i < this.mv.length; i++) {
            // 时间
            let min = parseInt(this.mv[i].duration / 1000 / 60);
            let sec = parseInt((this.mv[i].duration / 1000) % 60);
            if (min < 10) {
              min = "0" + min;
            }
            if (sec < 10) {
              sec = "0" + sec;
            }
            this.mv[i].duration = min + ":" + sec;

            // 播放次数
            if (this.mv[i].playCount > 100000) {
              this.mv[i].playCount =
                parseInt(this.mv[i].playCount / 10000) + "万";
            }
          }
        }
      }
    },
  },
  methods: {
    // 去mv详情页
    async gotoMusicMv(id) {
      await this.$router.push(`/mv?q=${id}`);
    },
    // 去歌单详情页
    async gotoMusicPlaylist(id) {
      // 跳转并携带数据即可
      await this.$router.push(`/PlayMusicList?q=${id}`);
    },
    async playMusic(id) {
      const { data: res } = await this.$http.get("song/url", {
        params: { id },
      });

      if (res.code !== 200) {
        return this.$message.error("error:请检查网络 ");
      } else {
        let url = res.data[0].url;
        this.$parent.musicUrl = url;
      }
    },
    async getSearchMusicdata() {
      const { data: res } = await this.$http.get("search", {
        params: {
          keywords: this.$route.query.q,
          type: 1,
          // 获取的数据量
          limit: 10,
        },
      });
      if (res.code != 200) {
        return this.$message.error("error:请检查网络 ");
      } else {
        console.log(res);
        this.songList = res.result.songs;

        //这里没必要自己算，引入moment函数就好了，只是提供一种写法
        // 计算歌曲时间
        for (let i = 0; i < this.songList.length; i++) {
          let min = parseInt(this.songList[i].duration / 1000 / 60);
          let sec = parseInt((this.songList[i].duration / 1000) % 60);
          if (min < 10) {
            min = "0" + min;
          }
          if (sec < 10) {
            sec = "0" + sec;
          }
          this.songList[i].duration = min + ":" + sec;
        }
        // 保存总数
        this.count = res.result.songCount;
      }
    },
  },
};
</script>

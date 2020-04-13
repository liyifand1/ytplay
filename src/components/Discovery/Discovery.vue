<template>
  <div class="discovery">
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
      style="line-height:30px"
    >
      <el-carousel-item v-for="item in banners" :key="item.encodeId">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img class="banner-img" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <h3 class="my">
      精品推荐 
    </h3>

    <el-row class="recommend">
      <el-col
        :span="4"
        v-for="(item, index) in recommendList"
        :key="index"
        :offset="index > 0 ? 2 : 0"
      >
        <div @click="toSongList(item.id)">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.picUrl" class="image" alt="" />
            <!-- <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"> -->
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
              <div class="bottom clearfix">
                <!-- <time class="time">{{ 2019 }}</time> -->
                <!-- <el-button type="text" class="button">播放</el-button> -->
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      banners: [],
      recommendList: [],
      // songId: this.$store.state.songId
    };
  },
  computed: {
    ...mapState(['songId'])
  },
  methods: {
    //获取轮播图
    async getBannerList() {
      const res = await this.$http.get("/banner");
      this.banners = res.data.banners;
      //   console.log(this.banners);
    },
    //获取推荐歌单
    async getRecommendList() {
      const res = await this.$http.get("/personalized?limit=10");
      this.recommendList = res.data.result;
    //   console.log(this.recommendList);
    },
    //跳转到歌单详情
    toSongList(id) {
    //   console.log(id);
      this.$router.push("/detail/" + id);
    }
  },
  created() {
    this.getBannerList();
    this.getRecommendList();
    // console.log(this.$store);
    
  }
};
</script>

<style scoped>
.el-card {
  cursor: pointer;
  height: 305px;
}
.el-col {
  margin: 10px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.my {
  /* text-decoration: none; */
  text-align: left;
  line-height: 15px;
}
.banner-img {
  width: 600px;
  /* height: 200px; */
}
/* .el-main[data-v-3dd2e005]{
    line-height: 30px !important;
} */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

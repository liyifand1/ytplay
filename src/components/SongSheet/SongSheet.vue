<template>
  <div>
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
export default {
    props:{
        recommendList:{
            type:Array,
            default:[],
            required:true
        }
    },
    methods: {
         //跳转到歌单详情
    toSongList(id) {
    //   console.log(id);
      this.$router.push("/detail/" + id);
    }
    },
}
</script>

<style scoped>
.el-card {
  cursor: pointer;
  height: 305px;
}
.el-col {
  margin: 10px;
}
.image {
  width: 100%;
  display: block;
}
</style>
<template>
 <el-container class="home-container">
  <el-header >
    <div class="my-header">     
      <div class="playing_con">
              <h3 class="playing_song"> {{$store.state.songName?'正在播放: '+$store.state.songName:''}}</h3>
      </div>
       <el-input @change="search" v-model="searchName" placeholder="搜索歌曲"></el-input>
    <!-- <el-button type="" @click="search">hah</el-button> -->
    </div>
   
  </el-header>
  <el-container class="my-main">
    <el-aside width="200px">
          <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1-1" @click="$router.push('/discovery').catch(err=>{})">
            发现音乐
            </el-menu-item>
          <el-menu-item index="1-2">推荐歌单</el-menu-item>
          <el-menu-item index="1-3">最新音乐</el-menu-item>
          <el-menu-item index="1-4">最新MV
          </el-menu-item>
          </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view :key="$route.path + $route.query.searchName?$route.query.searchName:''"></router-view>
      </el-main>
      <el-footer>
       
        <audio volume=0.1 :name="songId" :src="'https://music.163.com/song/media/outer/url?id='+songId+'.mp3'" autoplay controls></audio>
      </el-footer>
      <div>
      </div>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      shuju: "",
      songs: [],
      songInfo: {},
      searchName:'',
    };
  },

  created() {
 
  },
  computed: {
    ...mapState(['songId'])
  },
    methods: {
      // 播放歌曲
      async paly(id) {
        // console.log(id);
        const { data: res } = await this.$http.get(
          "http://localhost:3000/song/url",
          {
            params: {
              id
            }
          }
        );
        // console.log(res);
        this.songInfo = res.data[0];
        console.log(this.songInfo.url);
      },
      //搜索歌曲
      async search() {
        // console.log(this.searchName);
        this.$router.push({
          path:'/search',
          query:{searchName:this.searchName}
        })
       
      }
    }
};
</script>

<style scoped>
.playing_con{
  position: relative;
  width: 200px;
  height: 60px;
  overflow: hidden;
}
.playing_song{
  position: absolute;
  width: 200px;
  margin: 0;
  padding: 0;
  top: 0px;
  left: -200px;
  /* text-indent: -5em; */
  animation: textmove 10s linear infinite;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@keyframes textmove{ 
  0%{
    /* text-indent: 0; */
  }
  100%{
    /* text-indent: 200px; */
    left: 200px;
  }
}
.el-aside{
  position: fixed;
  top: 60px;
  left: 0;
}
.el-main{
  margin-top:60px ;
  margin-left:200px ;
}
.el-footer{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0px;
  /* top: 500px; */
  /* z-index: 999; */
}
.el-header{
  width: 100%;
  height: 60px;
  position: fixed !important;
  top: 0;
  left: 0;
  /* background-color: #fff; */
  z-index: 999;
}
/* .el-header{
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
} */
audio{
  width: 100%;
  /* background-color: #fff;
  color: #fff; */
}
.el-container .el-input{
  position: absolute;
  top: 5px;
  right: 10px;
  width: 200px;
}
.home-container{
    height: 100%;
}
  .el-header, .el-footer {
    /* position: relative; */
    background-color: #f1f3f4;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

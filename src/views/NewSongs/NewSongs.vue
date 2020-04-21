<template>
  <div>
      <el-button type="" @click="getNewSongs(0)">全部</el-button>
      <el-button type="" @click="getNewSongs(7)">华语</el-button>
      <el-button type="" @click="getNewSongs(8)">日本</el-button>
      <el-button type="" @click="getNewSongs(16)">韩国</el-button>
      <el-button type="" @click="getNewSongs(96)">欧美</el-button>

      <songs-list :songs="newSongs"></songs-list>
  </div>
</template>

<script>
import SongsList from '../../components/SongList/SongList'
export default {
    data() {
        return {
            newSongs:[]
        }
    },
    components:{
        SongsList
    },
    methods: {
        async getNewSongs(type=0){
              const {data:res} = await this.$http.get('/top/song',{
                   params:{
                       type
                   }
               })
            console.log(res);
            this.newSongs = res.data
        }
    },
    created() {
     this.getNewSongs()
    },
}
</script>

<style scoped>

</style>
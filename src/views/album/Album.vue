<template>
  <div>
    <div class="header">
        <div class="blur-pic">
          <img :src="album.blurPicUrl" alt="">
        </div>
        <div>
          <div>{{album.name}}</div>
          <div>

            <span v-for="(item) in album.artists" :key="item.id">
              {{item.name}}
              </span>
            {{album.publishTime | dateFormat}}
            </div>
          <div>{{album.company}}</div>
          <div >
            <p class="info">

              {{album.description}}
            </p>
             
            </div>
        </div>
    </div>
    <song-list :songs="songs"></song-list>
  </div>
</template>

<script>
// import SongList from '@/components/songList/SongList.vue'
import SongList from '@/components/SongList/SongList'
import {getAlbum} from '@/request/request.js'
import {convertKey} from '@/utils/utils'
export default {
    data() {
      return {
        albumId:0,
        songs:[],
        album:{}

      }
    },
    components:{
      SongList
    },

    created() {
      //获取专辑id
      this.albumId = this.$route.params.id
      // console.log(this.albumId);
      //获取专辑信息
      // this.getAlbumInfo()
    },
    beforeUpdate() {
      this.albumId = this.$route.params.id
      // console.log(this.albumId);
  

    },
    watch: {
      albumId(){
            //获取专辑信息
      this.getAlbumInfo()
      }
    },
    methods: {
        async getAlbumInfo(){
          const res = await getAlbum(this.albumId)
          // console.log(res);
          this.songs =convertKey( res.data.songs,{'al':'album','ar':'artists','dt':'duration'})
          this.album = res.data.album
          console.log(this.songs);
          console.log(this.album);
          
                    
        }
    },
}
</script>

<style scoped>
  
</style>
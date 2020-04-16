<template>
  <div>
      <div class="header">
          <div class="blur-pic">
              <img :src="artist.img1v1Url" alt="">
          </div>
          <div>
              <div>{{artist.name}}</div>
              <div class="info">{{artist.briefDesc}}</div>
          </div>
      </div>
        <song-list :songs="hotSongs"></song-list>
        
  </div>
</template>

<script>
import {getArtists} from '@/request/request'
import {convertKey} from '@/utils/utils'
import SongList from '@/components/SongList/SongList'
export default {
    data() {
        return {
            artist:{},
            hotSongs:[],
            id:''
        }
    },
    components:{
        SongList
    },
    methods: {
       async getArtists(){
          const {data} =  await getArtists(this.id) 
          console.log(data);
          this.artist = data.artist
          this.hotSongs = convertKey(data.hotSongs,{'al':'album','ar':'artists','dt':'duration'})
          console.log(this.hotSongs);
          
          
        }
    },
    created() {
        this.id = this.$route.params.id
    //    this.getArtists() 
    },
    beforeUpdate() {
        this.id = this.$route.params.id
        
    },
    updated() {
        
    },
    watch: {
        id(){
            this.getArtists()
        }
    },

}
</script>

<style scoped>

</style>
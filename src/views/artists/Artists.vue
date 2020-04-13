<template>
  <div>
      {{$route.params.id}}
        <song-list :songs="hotSongs"></song-list>
        
  </div>
</template>

<script>
import {getArtists} from '@/request/request'
import {convertKey} from '@/utils/utils'
import SongList from '@/components/songList/SongList'
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

<style>

</style>
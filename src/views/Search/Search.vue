<template>
  <div>
    <song-list @getSongName="songName=$event" :songs="songs">
    </song-list>
  </div>
</template>

<script>
import SongList from "@/components/SongList/SongList";

export default {
    components:{
        SongList
    },
  data() {
    return {
      songs: [],
      searchName:this.$route.query.searchName,
      songName:''
   
    };
  },
  watch: {
      searchName(){  
          this.searchSong()
      }
  },
  methods: {
    async searchSong() {
      console.log(this.$route);

      const { data: res } = await this.$http.get("search", {
        params: {
          keywords: this.searchName 
        }
      });
      this.songs = res.result.songs;
      console.log(this.songs);
    }
  },
  created() {
    this.searchSong();
  }
};
</script>

<style scoped></style>

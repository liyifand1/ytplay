<template>
  <div>
    <div class="header">
      <div class="blur-pic">
        <img :src="playList.coverImgUrl" alt="">
      </div>
      <div>
              <div>{{playList.name}}</div>
              <div class="info">{{playList.description}}</div>
      </div>
    </div>
    <song-list :songs="songs">
    </song-list>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { convertKey } from "../../utils/utils";
import SongList from "../songList/SongList.vue";
import { cduration } from "@/utils/utils";
import { log } from 'util';

export default {
  data() {
    return {
      songListId: "",
      songs: [],
      activeName: "first",
      oldSongs:[],
      playList:{}
    };
  },
  components: {
    SongList
  },

  methods: {
    cduration,
    conName() {
      console.log(this.playSongName);
    },
    ...mapMutations(["playIdChange", "addtb"]),
    ...mapActions(["add"]),
    play(id) {
      //   console.log(id);
      // this.$store.commit('playIdChange',id)
      this.playIdChange(id);
    },
    handleClick() {},
    //获取歌曲
    async getSongList() {
      this.songListId = this.$route.params.id;
      const { data } = await this.$http.get("/playlist/detail", {
        params: {
          id: this.songListId
        }
      });
      this.playList = data.playlist;
      console.log(this.playList);
      
      // console.log(data.playlist.tracks);
      this.oldSongs = data.playlist.tracks;
      this.songs =convertKey(data.playlist.tracks,{'ar':'artists','al':'album','dt':'duration'});
      console.log(this.songs);
    }
  },
  created() {
    this.getSongList();
  }
};
</script>

<style>
.play-div {
  cursor: pointer;
}
</style>

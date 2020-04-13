<template>
  <div>
    <song-list :songs="songs">
      <!-- <template v-slot:artists="scopes">
          <span
            v-for="item in scopes.scope.row.ar"
            :key="item.id"
            class="c-pointer"
          >
            {{ item.name }}
          </span>
      </template>
      <template v-slot:album="scopes"> 
          <div class="c-pointer">
          {{ scopes.scope.row.al.name }}
        </div>
      </template>
      <template v-slot:duration="scopes">
         <div>
          {{ cduration(scopes.scope.row.duration) }}
        </div>
      </template> -->
    </song-list>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { convertKey } from "../../utils/utils";
import SongList from "../songList/SongList.vue";
import { cduration } from "@/utils/utils";

export default {
  data() {
    return {
      songListId: "",
      songs: [],
      activeName: "first",
      oldSongs:[]
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

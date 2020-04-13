//此组件用于展示歌曲列表,需要传入数组songs
<template>
  <!-- 歌曲 -->
  <el-table :data="songs" stripe style="width: 100%">
    <el-table-column prop="name" label="歌曲名称" width="180">
      <template slot-scope="scope">
        <div @click="play(scope.row)" class="c-pointer">
          {{ scope.row.name }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="artists[0].name" label="歌手" width="180">
      <template v-slot="scope">
        <slot name="artists" :scope="scope">
          <span
            v-for="item in scope.row.artists"
            :key="item.id+item.name"
            class="c-pointer"
          >
          <router-link :to="'/artists/'+item.id">
            {{ item.name }}
          </router-link>
          </span>
        </slot>
      </template>
    </el-table-column>

    <el-table-column prop="album.name" label="专辑">
      <template v-slot="scope">
        <slot name="album" :scope="scope">      
        <div class="c-pointer">
          <router-link :to="'/album/'+scope.row.album.id">
          {{ scope.row.album.name }}
          </router-link>
        </div>
      </slot>
      </template>
    </el-table-column>
    <el-table-column label="时长" prop="duration">
      <template v-slot="scope">
          <slot name="duration" :scope="scope">

        <div>
          <!-- {{ cduration(scope.row.duration) }} -->
          {{ scope.row.duration | newDuration}}
        </div>
          </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapMutations } from "vuex";
import { cduration } from "@/utils/utils";
import Bus from "../../bus";
export default {
  props: {
    songs: {
      type: Array,
      default: [],
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["playIdChange","playSongChange"]),
    play(song) {
      this.playIdChange(song.id);
      this.playSongChange(song.name)
      this.$emit("getSongName", song.name);
    },
    cduration
  },
  computed: {}
};
</script>

<style>
/* .play-div{
    cursor: pointer;
} */
</style>

<template>
  <div>
      <song-sheet :recommendList="recommendList"></song-sheet>
  </div>
</template>

<script>
import SongSheet from '@/components/SongSheet/SongSheet'
export default {
    components:{
        SongSheet
    },
    data() {
        return {
            recommendList:[]
        }
    },
    methods: {
         //获取推荐歌单
    async getRecommendList() {
      const res = await this.$http.get("/personalized?limit=30");
      this.recommendList = res.data.result;
      this.recommendList.splice(0,10)
    //   console.log(this.recommendList);
    },
  
    },
    created() {
        this.getRecommendList()
    },
}
</script>

<style >

</style>
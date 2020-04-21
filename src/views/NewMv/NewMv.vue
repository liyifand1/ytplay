<template>
  <div>
      <div>
          <div class="select-area select">
              <span>地区:</span>
              <ul>     
                  <li>
                      <span class="active" >全部</span>
                  </li>
                     <li>
                      <span>内地</span>
                  </li>
                  <li>
                      <span>欧美</span>
                  </li>
                     <li>
                      <span>日本</span>
                  </li>
                     <li>
                      <span>韩国</span>
                  </li>
              </ul>
              </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            area:[]
        }
    },
}
</script>

<style scoped>

.select span{
    float: left;
}
.select ul{
    margin: 0;
    padding: 0;
    float: left;
}
.select li{
    float: left;
}
.select li span{
    padding: 0 20px;
    cursor: pointer;
    margin: 0 20px;
}
.active{
    border-radius: 20px;
    background: #ccc;
}
</style>
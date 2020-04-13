<template>
<div>

  <input  type="text" placeholder="请输入">
  <input  type="text" >
  <div>{{msg}}</div>
  <div v-for="student in students" :key="student">{{student}}</div>
</div>
  
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            default:"没有信息",
            require:true
        },
        students:{
            type:Array,
            default(){
                return ["meiy"]
            },
            require:true
        }
    }
}
</script>

<style>

</style>
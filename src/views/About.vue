<template>
  <p>about133</p>
  <p>num：{{ store.num }}</p>
  <p>doubleNum:{{ store.doubleNum }}</p>
  <button @click="store.increment">加</button>
  <button @click="store.decrement">减</button>
  <div class="ha">哈</div>
  <audio autoplay muted controls @volumechange="volumechange">
    <source src="~$/花粥、马雨阳-盗将行.mp3">
  </audio>
</template>
<script>
import {useStore} from "@/store/index.js";
import mp3 from "$/花粥、马雨阳-盗将行.mp3"
export default {
  setup() {
    var store = useStore()
    function volumechange(){
      console.log(11)
    }
    return {store,volumechange,mp3}
  },
}
</script>

<style scoped>
.ha{
  transition: font-size .3s;
  font-size: 32px;
}
</style>
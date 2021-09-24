<template>
  <div>
    <NavBar />
    <router-view class="content-pages"/>
  </div>
</template>

<style scoped>
.content-pages {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 25px 64px 60px;
  height: calc(100vh - 210px);
}
</style>


<script>
import "./assets/css/style.css"
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<template>
  <div class="home">
    <div class="categories-buttons-box">
      <CategoryBtn
        v-for="(c, index) in categories"
        :key="index"
        :idFiltered="idProduct"
        :category="c"
        @filter-by="getCatalogByCategory"
      />
    </div>
    <EmptyList />
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
.categories-buttons-box {
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
}
</style>

<script>
import EmptyList from "../components/EmptyList.vue";
import CategoryBtn from "../components/CategoryBtn.vue";
import { request } from "../plugins/axios-plugin";

export default {
  name: "Home",
  data() {
    return {
      idProduct: null,
      categories: [],
    };
  },
  components: {
    EmptyList,
    CategoryBtn,
  },
  methods: {
    getCatalogByCategory() {},
  },
  mounted() {
    request.get("categories").then((res) => {
      this.categories = res.data;
    });
  },
};
</script>

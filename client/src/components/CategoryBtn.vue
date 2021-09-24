<template>
  <button
    :class="['btn', 'w-100', { selected: category._id === idFiltered }]"
    v-text="category.name"
    @click="filter(category._id)"
  ></button>
</template>

<script>
export default {
  props: {
    category: { type: Object, required: true },
    idFiltered: { type: String },
  },
  methods: {
    filter(id) {
      this.$emit("filter-by", id);
    },
  },
};
</script>

<style>
</style>
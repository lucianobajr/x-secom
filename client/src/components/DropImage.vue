<template>
  <div class="drop-image">
    <input
      ref="fileInput"
      type="file"
      @change="setImage"
      enctype="multipart/form-data"
    />

    <div
      class="drag-drop-box size-default"
      @click="$refs.fileInput.click()"
      v-cloak
      @drop.prevent="setImage"
      @dragover.prevent
    >
      <img v-if="image.content" :src="image.content" alt="image" />

      <div v-else>
        <img src="../assets/img/cloud.svg" alt="cloud" />
        <span
          >Anexar foto do produto <br />Se preferir arraste e solte a foto</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: Object, default: null },
  },
  methods: {
    async setImage(e) {
      let img = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      await this.toBase64(img);
    },
    toBase64(file) {
      let image;
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      })
        .then((response) => {
          image = response;
        })
        .finally(() => {
          let temp = { ...this.image };
          temp.content = image;
          this.$emit("image", temp);
        });
    },
    removeImage() {
      this.imgURL = null;
      this.$emit("set-image", { prop: "coverImage", item: null });
    },
  },
};
</script>

<style scoped>
.drag-drop-box {
  border-radius: 12px;
  border: 1px solid var(--laranja);
  min-height: 186px;
  height: 100%;
  background-color: var(--cinza-claro);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 8px;
  font-size: 14px;
  overflow: hidden;
}

.drag-drop-box > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.drop-image input {
  display: none;
}
</style>
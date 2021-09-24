<template>
  <div>
    <a href="" class="arrow-back">
      <img src="../assets/img/arrow-back.svg" alt="arrow-back" />
    </a>

    <form>
      <div class="form-header">
        <div class="title">
          <img
            src="../assets/img/feather-shopping-bag.svg"
            alt="feather-shopping-bag"
          />
          <span>Cadastrar novo produto</span>
        </div>
        <div class="step">Etapa {{ step }} de 2</div>
      </div>
      <div v-if="step === 1">
        <div class="float-right">
          <div class="group-form-input">
            <input type="text" v-model="product.name" class="input-form" />
            <label :class="{ hasValue: product.name }">Nome do produto</label>
          </div>
          <div class="group-form-input">
            <input
              type="text"
              v-model="product.description"
              class="input-form"
            />
            <label :class="{ hasValue: product.description }">Descrição</label>
          </div>
          <div class="group-form-input">
            <input
              type="text"
              v-model="product.price"
              v-money="'money'"
              class="input-form"
            />
            <label :class="{ hasValue: product.price }">Valor (R$)</label>
          </div>
          <div class="group-form-input">
            <select v-model="product.category" class="input-form">
              <option
                v-for="c in categories"
                v-bind:value="c._id"
                :key="c._id"
                :v-text="c.name"
              >
                {{ c.name }}
              </option>
            </select>
            <label :class="{ hasValue: product.name }">Nome do produto</label>
          </div>
          <div class="group-form-input">
            <input type="text" v-model="product.name" class="input-form" />
            <label :class="{ hasValue: product.name }">Nome do produto</label>
          </div>

          <div class="group-form-radio">
            <div>Para quantas pessoas?</div>
            <label for="count_server1">
              <input
                type="radio"
                id="count_server1"
                value="Serve 1 pessoa"
                v-model="product.count_server"
              />
              Serve 1 pessoa
              <span class="check"></span>
            </label>
            <label for="count_server2">
              <input
                type="radio"
                id="count_server2"
                value="Serve 2 pessoa"
                v-model="product.count_server"
              />
              Serve 2 pessoa
              <span class="check"></span>
            </label>
            <label for="count_server3">
              <input
                type="radio"
                id="count_server3"
                value="Família - até 4 pessoas"
                v-model="product.count_server"
              />
              Família - até 4 pessoas
              <span class="check"></span>
            </label>
          </div>

          <div class="group-form-radio">
            <div>Disponibilidade do produto para o público</div>
            <label for="is_avaliable1">
              <input
                type="radio"
                id="is_avaliable1"
                :value="true"
                v-model="product.is_avaliable"
              />
              Serve 1 pessoa
              <span class="check"></span>
            </label>
            <label for="is_avaliable2">
              <input
                type="radio"
                id="is_avaliable2"
                :value="false"
                v-model="product.is_avaliable"
              />
              Serve 2 pessoa
              <span class="check"></span>
            </label>
          </div>

          <button class="btn btn-laranja btn-large" @click="step = 2">
            Próximo
          </button>
        </div>
      </div>
      <div v-else>
        <div class="text-laranja">Selecione a foto do produto</div>
        <div class="photo-select">
          <DropImage v-for="img in product.image" :key="img.idx" :image="img" @image="setImage"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { request } from "../plugins/axios-plugin";
import DropImage from "../components/DropImage.vue";

export default {
  data() {
    return {
      step: 1,
      product: {
        name: null,
        description: null,
        price: null,
        category: null,
        count_server: "Serve 1 pessoa",
        is_avaliable: true,
        image: [
          { idx: 0, content: null },
          { idx: 1, content: null },
          { idx: 2, content: null },
        ],
      },
      categories: [],
    };
  },
  mounted() {
    request.get("categories").then((res) => {
      this.categories = res.data;
    });
  },
  components: {
    DropImage,
  },
  methods: {
    setImage(image) {
      this.product.image[image.idx].content = image.content;
    },
  },
};
</script>

<style scoped>
.arrow-back {
  position: absolute;
  cursor: pointer;
}

form {
  position: relative;
  width: 100%;
  max-width: 635px;
  margin: 0 auto;
}

.form-header .title {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 20px;
  margin-bottom: 14px;
  color: var(--preto);
}

.form-header .step {
  font-size: 17px;
  margin-bottom: 20px;
  color: var(--cinza-escuro);
}

.photo-select {
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  margin-bottom: 24px;
}

.photo-select > div {
  height: 186px;
  font-size: 17px;
}

.photo-select > div:first-child {
  grid-column: span 2;
  height: 296px;
}
</style>
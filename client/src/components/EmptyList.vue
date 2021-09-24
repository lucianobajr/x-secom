<template>
  <div class="empty-list">
    <img src="../assets/img/leaves.svg" alt="leaves" />
    <div class="text-laranja text-center">
      Ops! <br />Nenhum produto cadastrado
    </div>
    <div class="padding-box">
      Cadastre o seu primeiro produto e começe a vender agora mesmo.
    </div>

    <router-link to="/produtos/novo">
      <button class="btn btn-laranja w-100">Cadastrar Produto</button>
    </router-link>
  </div>
</template>

<style scoped>
.empty-list {
  background-color: transparent;
  position: relative;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  max-width: 336px;
  width: 100%;
}
.padding-box {
  padding: 0 20px;
}
</style>
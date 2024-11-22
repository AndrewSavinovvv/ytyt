<script setup>

</script>

<template>
  <button class="hero__left-btn">
    <span>Пройти тестирование</span>
    <img src="@/assets/icons/arrow.svg" alt="">
  </button>
</template>

<style scoped>
.hero__left-btn{
  background: #F15525;
  border: none;
  color: white;
  width: 321px;
  height: 70px;
  border-radius: 30px;
  cursor: pointer;
}
.hero__left-btn span {
  margin-right: 12px;
  font-size: 20px;
  font-weight: 400;
}
.hero__left-btn:hover {
  background: #38BFF2;
  transition: 300ms;
}

</style>
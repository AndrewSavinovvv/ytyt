<script setup>

import BottomComponent from "@/components/BottomComponent.vue";
</script>

<template>
  <div class="preFooter container">
    <div>
      <img src="@/assets/img/pre.png" alt="">
    </div>
    <div>
      <p class="preFooter__text">Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</p>
    </div>
    <BottomComponent class="preFooter__btn"></BottomComponent>
  </div>
</template>

<style scoped>
.preFooter{
  display: flex;
  gap: 30px;
  align-items: center;
  background: #EAF2F5;
  border-radius: 30px;
  padding: 54px 64px;
}
.preFooter__text{
  font-size: 17px;
  font-weight: 400;
  color: #22253B;
}
.preFooter__btn{
  width: 311px;
}
@media (max-width: 890px) {
  .preFooter {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .preFooter__text {
    text-align: center;
    font-size: 15px;
  }

  .preFooter__btn {
    width: 100%;
  }
}
</style>
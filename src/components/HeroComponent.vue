<script setup>

import BottomComponent from "@/components/BottomComponent.vue";
</script>

<template>
  <div class="hero">
  <div class="hero__wrapper container">
    <div class="hero__left">
      <h1 class="hero__left-title">Школа <span>{</span> <span>программирования</span> <span>}</span> <br>для тех, кому нужны <br> реальные навыки,
        <br>а не просто сертификат</h1>
      <div class="hero__left-line"></div>
      <p class="hero__left-text">Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
     <BottomComponent class="hero-btn"></BottomComponent>
    </div>
    <div class="hero__right">
      <img src="@/assets/img/hero-img.png" alt="">
    </div>
  </div>
    <div class="hero__arrow">
      <img src="@/assets/icons/arrow-down.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.hero {
  background: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero__wrapper {
  display: flex;
  padding-top: 70px;
  justify-content: space-between;
  padding-bottom: 90px;
}
.hero__left{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero__left-title {
  font-size: 46px;
  font-weight: 500;
}
.hero__left-title span {
  color: #F15525;
}
.hero__left-title span:nth-child(2) {
  color: #22253B;
  font-style: italic;
  font-weight: 600;
}
.hero__left-text{
  color: #22253B;
  font-size: 16px;
  font-weight: 400;
}
.hero__left-line {
  width: 365px;
  height: 1px;
  background-color: #DEDEDE;
}
.hero__arrow{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 37px;
  border-radius: 50%;
  background: #FFFFFF;
  cursor: pointer;
}
@media (max-width: 890px) {
  .hero__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .hero__right img {
    width: 210px;
    height: 220px;
  }
  .hero__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .hero__left-title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .hero__left-text {
    font-size: 12px;
    margin-top: 9px;
    margin-bottom: 21px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
  .hero-btn {
    margin-bottom: 63px;
    width: 100%;
  }
}
</style>
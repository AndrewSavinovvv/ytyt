<script setup>

import BottomComponent from "@/components/BottomComponent.vue";
</script>

<template>
  <div class="about__wrapper ">
    <div class="about container">
      <h1 class="about__title">Как происходит обучение на YtYt?</h1>
      <p class="about__text">
        Обучение должно быть комфортным. Поэтому мы разработали собственную <br> платформу для обучения программированию. На ней вы можете не только изучать
        <br> теорию, но и запускать готовые примеры и даже писать свой собственный код.
      </p>
   <div class="about__display">
     <img class="about__display-img" src="@/assets/img/about.png" alt="">
     <div class="about__player">
       <img src="@/assets/img/red.png" alt="">
       <p>Посмотреть видео</p>
     </div>
   </div>
      <div class="about__blocks">
        <div class="about__blocks-item">
          <div>01</div>
          <p class="about__blocks-title">Весь материал разбит на небольшие уроки</p>
          <p class="about__blocks-text">Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
        </div>
        <div class="about__blocks-item">
          <div>01</div>
          <p class="about__blocks-title">Весь материал разбит на небольшие уроки</p>
          <p class="about__blocks-text">Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
        </div>
        <div class="about__blocks-item">
          <div>01</div>
          <p class="about__blocks-title">Весь материал разбит на небольшие уроки</p>
          <p class="about__blocks-text">Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
        </div>
      </div>
      <div class="about__footer">
        <BottomComponent></BottomComponent>
        <p>Попробуйте, первые уроки <br> бесплатны, но нужно пройти тестирование</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.about__wrapper {
  background: lightgrey;
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-bottom: 30px;
}
.about__title {
  margin-top: 55px;
  margin-bottom: 26px;
  font-size: 46px;
  font-weight: 600;
  color: #22253B;
}
.about__text{
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 28px;
  color: #22253B;
}
.about__display-img {
  max-width: 400px;
}
.about__display {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about__player {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.about__player p {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
}
.about__blocks {
  display: flex;
  justify-content: left;
  align-items: flex-start;
  margin-top: 29px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 53px 56px;
  gap: 125px;
}
.about__blocks-item div {
  color: #38BFF2;
  font-size: 77px;
  font-weight: 700;
  text-align: left;
}
.about__blocks-title {
  font-size: 24px;
  font-weight: 600;
  color: #22253B;
  text-align: left;
  margin-bottom: 19px;
}
.about__blocks-text {
  font-size: 16px;
  font-weight: 400;
  color: #22253B;
  text-align: left;
}
.about__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-top: 26px;
  max-width: 538px;
  border-radius: 45px;
  padding: 14px 12px;
}
.about__footer p {
  text-align: left;
  margin-left: 24px;
}
@media (max-width: 885px) {
  .about {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }

  .about__display {
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .about__player {
    position: absolute;
    top: 1px;
    right: 1px;
    margin-top: 15px;
  }

  .about__blocks {
    flex-direction: column;
    gap: 20px;
  }

  .about__footer {
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    padding: 35px;
  }

  .about__footer p {
    margin: 10px 0 0 0;
  }
  .about__display-img {
    width: 290px;
  }
  .about__footer {
    width: 300px;
  }
}
</style>
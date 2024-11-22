<script setup>
import img from "@/assets/img/learn.png"

const learnBlocks = [
  {
    img: img ,
    title: "Огромное количество практики",
    text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
  },
  {
    img: img ,
    title: "Современные методики обучения",
    text: "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
  },
  {
    img: img ,
    title: "Простое и понятное изложение",
    text: "Вместо заумных терминов – примеры из реального мира",
  },
  {
    img: img ,
    title: "Гибкий график занятий",
    text: "Учитесь в любое время в удобном для вас темпе",
  },
  {
    img: img ,
    title: "Прямая связь с опытными программистами",
    text: "Задавайте вопросы и отправляйте свой код на проверку",
  },
  {
    img: img ,
    title: "Оплата небольшими частями",
    text: "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу",
  },
  {
    img: img ,
    title: "Быстрый и легкий возврат",
    text: "Если передумаете учиться – вернем деньги за 3 рабочих дня",
  },
];
</script>

<template>
  <div class="learn container">
    <h1 class="learn__title">Обучение в YtYt – это <br />удобно и результативно</h1>
    <div class="learn__blocks">
      <div v-for="(row, rowIndex) in [learnBlocks.slice(0, 4), learnBlocks.slice(4)]" :key="rowIndex" class="learn__row">
        <div v-for="(block, index) in row" :key="index" class="learn__block">
         <div>
           <img :src="block.img" alt="" />
         </div>
         <div>
           <h3>{{ block.title }}</h3>
           <p>{{ block.text }}</p>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.learn {
  padding-top: 84px;
  padding-bottom: 80px;
}
.learn__title {
  font-size: 46px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
}
.learn__blocks {
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.learn__row {
  display: flex;
  justify-content: center;
  gap: 27px;
}
.learn__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 270px;
  height: 254px;
  padding: 16px;
  background-color: #EAF2F5;
  border-radius: 15px;
  box-sizing: border-box;
}
.learn__block img {
  width: 59px;
  height: 59px;
  margin-bottom: 16px;
}
.learn__block h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #22253B;
}
.learn__block p {
  font-size: 13px;
  color: #22253B;
  font-weight: 400;
}
@media (max-width: 855px) {
  .learn {
    padding: 10px;
  }
  .learn__blocks {
    gap: 16px;
  }

  .learn__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .learn__block {
    width: 100%;
    height: auto;
  }
  .learn__row:last-child .learn__block:last-child {
    display: flex;
    grid-column: span 2;
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap:17px;
  }
  .learn__title {
    font-size: 24px;
    font-weight: 600;
    padding-top: 68px;
    margin-bottom: 24px;
  }
  .learn__block img {
    margin-bottom: 0;
  }
}
</style>
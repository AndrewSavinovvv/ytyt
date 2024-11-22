<script setup>
const technologies = [
  { name: "Язык программирования Python", color: "#5096FF" },
  { name: "Сети", color: "#FFB359" },
  { name: "Базы данных", color: "#FF6F50" },
  { name: "Фреймворки Flask и Django", color: "#4BD071" },
  { name: "Отладка и тестирование", color: "#50C0FF" },
  { name: "Docker", color: "#4B77B9" },
  { name: "Git", color: "#AF93FF" },
];
</script>

<template>
  <div class="technology container">
    <h1 class="technology__title">Какие технологии вы изучите:</h1>
    <div class="technology__block">
      <div class="technology__block__left">
        <img src="@/assets/img/tech.png" alt="" />
      </div>
      <div class="technology__block__right">
        <div class="technology__block__right-list">
          <ul class="technology__block__list">
            <li
                v-for="(tech, index) in technologies"
                :key="index"
                class="button"
                :style="{ backgroundColor: tech.color }"
            >
              {{ tech.name }}
            </li>
          </ul>
        </div>
        <p class="technology__block__right-text">Это необходимый минимум для современного backend-разработчика</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technology {
  padding-top: 103px;
}
.technology__title {
  text-align: center;
  font-size: 46px;
  font-weight: 600;
}
.technology__block {
  display: flex;
  justify-content: space-between;
  background: #eaf2f5;
  border-radius: 30px;
  padding: 42px 110px;
  padding-bottom: 0;
  gap: 59px;
  margin-top: 35px;
}
.technology__block__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  white-space: nowrap;
}
.technology__block__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.technology__block__right-text {
  font-weight: 600;
  font-size: 20px;
  color: #22253B;
  margin-top: 25px;
}
@media (max-width: 855px) {
  .technology__block__left {
    display: none;
  }
  .technology__block__right p {
    display: none;
  }
  .technology {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .technology__block {
    display: flex;
    justify-content: center;
    padding-top: 17px;
  }
  .technology__title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
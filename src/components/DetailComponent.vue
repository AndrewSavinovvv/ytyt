<script setup>

</script>

<template>
  <div class="details container">
    <div class="details">
      <div class="detail__left">
        <img src="@/assets/img/det.png" alt="Помощь">
      </div>
      <div class="detail__right">
        <h1 class="detail__right-title">Помощь и поддержка</h1>
        <p class="detail__right-text">Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.</p>
        <p class="detail__right-text2">Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше.</p>
      </div>
    </div>
  </div>
  <div class="details container">
    <div class="detail__right">
      <h1 class="detail__right-title">Помощь и поддержка</h1>
      <p class="detail__right-text">Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.</p>
      <p class="detail__right-text2">Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше.</p>
    </div>
    <div class="detail__left">
      <img src="@/assets/img/det.png" alt="Помощь">
    </div>
  </div>
</template>

<style scoped>
.details {
  display: flex;
  gap: 20px;
  align-items: center;
  padding-top: 20px;
}

.detail__left {
  background: #EAF2F5;
  border-radius: 20px;
  padding: 21px 65px;
}

.detail__right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #EAF2F5;
  border-radius: 20px;
  padding: 54px;
}
.detail__right-title {
  font-size: 32px;
  font-weight: 600;
  color: #22253B;
  margin-bottom: 18px;
}
.detail__right-text,.detail__right-text2 {
  font-size: 16px;
  font-weight: 400;
  color: #22253B;
  margin-bottom: 15px;
}
@media (max-width: 885px) {
  .details {
    flex-direction: column;
    display: flex;
    padding: 10px;
  }
  .detail__right-text,.detail__right-text2 {
    font-size: 12px;
  }
  .detail__right-title {
    font-size: 20px;
  }
  .detail__right {
    width: 280px;
  }
}
</style>
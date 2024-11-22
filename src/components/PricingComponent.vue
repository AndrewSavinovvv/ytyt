<script setup>

</script>

<template>
  <div class="pricing container">
    <h1 class="pricing__title">Стоимость обучения</h1>
    <div class="pricing__detail-list">
      <div class="pricing__detail">
        <img src="@/assets/img/rub.png" alt="">
        <p class="pricing__detail-text">Любой из блоков вы <br> можете оплатить в <br> рассрочку</p>
      </div>
      <div class="pricing__detail">
        <img src="@/assets/img/rub.png" alt="">
        <p class="pricing__detail-text">Любой из блоков вы <br> можете оплатить в <br> рассрочку</p>
      </div>
      <div class="pricing__detail">
        <img src="@/assets/img/rub.png" alt="">
        <p class="pricing__detail-text">Любой из блоков вы <br> можете оплатить в <br> рассрочку</p>
      </div>
    </div>
    <table class="pricing__table">
      <thead>
      <tr>
        <th>Блок</th>
        <th>Стоимость</th>
        <th>Расчетное время обучения (мес.)*</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1000 ₽</td>
        <td>2 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1500 ₽</td>
        <td>3 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1200 ₽</td>
        <td>2.5 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1800 ₽</td>
        <td>4 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1100 ₽</td>
        <td>2 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1400 ₽</td>
        <td>3 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1300 ₽</td>
        <td>2.5 часа</td>
      </tr>
      <tr>
        <td>Введение в программирование
        </td>
        <td>1600 ₽</td>
        <td>3.5 часа</td>
      </tr>
      </tbody>
    </table>
    <p class="pricing__tooter">
      * если занятиям уделяется около 20 часов в неделю
    </p>
  </div>
</template>

<style scoped>
.pricing__detail-list {
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
}
.pricing__title {
  font-size: 46px;
  font-weight: 600;
  text-align: center;
}
.pricing {
  padding-top: 100px;
  padding-bottom: 30px;
}
.pricing__detail {
  display: flex;
  align-items: center;
}
.pricing__detail-text {
  margin-left: 18px;
  font-size: 16px;
  font-weight: 400;
  color: #22253B;
}
.pricing__table {
  margin-top: 50px;
  width: 100%;
  border-collapse: collapse;
}
.pricing__table th,
.pricing__table td {
  padding: 16px;
  border-radius: 20px;
}
.pricing__table th {
  color: #38BFF2;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}
.pricing__table td {
  font-size: 20px;
  font-weight: 400;
  color: #22253B;
  text-align: left;
}
.pricing__table th:last-child {
  text-align: right;
}
.pricing__table td:last-child {
  text-align: center;
}
.pricing__table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.pricing__tooter {
  color: #8E8E8E;
  font-size: 16px;
  font-weight: 400;
  margin-top: 25px;
  margin-left: 25px;
}
@media (max-width: 885px) {
  .pricing__detail-list {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .pricing__detail {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
  .pricing__detail-text {
    text-align: center;
    margin-top: 10px;
    margin-left: 0;
    font-size: 12px;
  }
  .pricing__table th:nth-child(2){
    display: none;
  }
  .pricing__table th:nth-child(3){
    display: none;
  }
  .pricing__table td:nth-child(2) {
    display: none;
  }
  .pricing__table td:nth-child(3) {
    display: none;
  }
  .pricing__table th,.pricing__table td{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
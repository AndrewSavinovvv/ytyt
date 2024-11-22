<script setup>

</script>

<template>
    <footer class="footer container">
      <div class="footer__left">
      <div class="footer__left-logo">
        <img src="@/assets/icons/logo.svg" alt="">
        <p>Школа <br> программирования</p>
      </div>
        <div class="footer__left-icons">
          <img src="@/assets/icons/inst.svg" alt="">
          <img src="@/assets/icons/inst.svg" alt="">
          <img src="@/assets/icons/inst.svg" alt="">
          <img src="@/assets/icons/inst.svg" alt="">
        </div>
      </div>
      <div class="footer__right">
        <ul class="footer__right__list">
          <li>Чему вы научитесь</li>
          <li>Процесс обучения</li>
          <li>Стоимость</li>
          <li>Контакты</li>
          <li>Регистрация</li>
        </ul>
      </div>
      <div class="footer__contact">
        <span class="footer__contact-phone"><a href="+7 (499) 348 93 96">+7 (499) 348 93 96</a></span>
        <div class="footer__contact-email">info@ytyt.ru</div>
        <span>ИП Умаров Т. А.</span>
        <span>ИНН 745216229809</span>
        <span>ОГРНИП 315745200001358</span>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  padding-top: 63px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__left {
  display: flex;
  flex-direction: column;
  max-width: 50%;
}

.footer__left-logo {
  display: flex;
  margin-bottom: 40px;
}

.footer__left-logo p {
  margin-left: 18px;
  color: #8E8E8E;
  font-weight: 400;
  font-size: 16px;
}

.footer__left-icons {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  cursor: pointer;
}

.footer__right,
.footer__contact {
  margin-left: auto;
}

.footer__right {
  margin-bottom: 30px;
}

.footer__right ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__right li {
  font-size: 16px;
  margin-bottom: 10px;
  color: #22253B;
}

.footer__contact span {
  display: block;
  font-size: 14px;
  color: #8E8E8E;
  margin-bottom: 8px;
}
.footer__contact-phone a {
  color: #38BFF2;
  text-decoration: none;
}
.footer__contact-email {
  color: #22253B;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 95px;
  cursor: pointer;
}
.footer__right__list li{
  margin-bottom: 25px;
  cursor: pointer;
}
.footer__right__list li:hover{
  color: #F15525;
  transition: 300ms;
}
.footer__contact span {
  font-size: 13px;
}

.footer__left-icons img:hover  {
  fill: #F15525;
  transform: scale(2);
}
@media (max-width: 885px) {
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .footer__left,.footer__right,.footer__contact {
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }

}
</style>
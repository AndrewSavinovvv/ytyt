<template>
  <div class="header__wrapper">
    <header class="header container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/icons/logo.svg" alt="logo" />
        </router-link>
      </div>
      <div class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link to="/learn">Чему вы научитесь</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/process">Процесс обучения</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/pricing">Стоимость</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="header__auth">
        <span class="header__auth-registration">Регистрация</span>
        <button class="header__auth-button">
          <img src="@/assets/icons/arrow-right.svg" alt="Иконка входа" />
          <span class="header__auth-button-text">Войти</span>
        </button>
      </div>
      <div class="header__burger" @click="toggleModal">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <div v-if="isModalOpen" class="modal-overlay" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close-btn" @click="toggleModal">
          <img src="@/assets/icons/close.svg" alt="">
        </button>
        <ul class="modal-nav-list">
          <li class="modal-nav-item">
            <router-link to="/learn">Чему вы научитесь</router-link>
          </li>
          <li class="modal-nav-item">
            <router-link to="/process">Процесс обучения</router-link>
          </li>
          <li class="modal-nav-item">
            <router-link to="/pricing">Стоимость</router-link>
          </li>
          <li class="modal-nav-item">
            <router-link to="/contacts">Контакты</router-link>
          </li>
          <li class="modal-nav-item">
            <router-link to="/contacts">Регистрация</router-link>
          </li>
        </ul>
        <button class="modal-login-btn">
          <img src="@/assets/icons/arrow-right.svg" alt="Иконка входа" />
          Войти</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: white;
  align-items: center;
  padding-right: 10px;
  padding-left: 37px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.header__wrapper {
  background: lightgrey;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
}

.header__nav-list {
  display: flex;
  list-style: none;
  gap: 41px;
}
.header__nav-item a {
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  color: #22253B;
}

.header__auth-button-text{
  color: white;
  margin-left: 2px;
}
.header__auth-button {
  background: #38BFF2;
  border: none;
  border-radius: 20px;
  width: 77px;
  height: 31px;
  cursor: pointer;
}
.header__auth {
  display: flex;
  align-items: center;
  gap: 15px;
}
.header__auth-registration:hover {
  color: #F15525;
}
.header__auth-button:hover {
  background: #F15525;
}
.header__nav-list a:hover  {
  color: #F15525;
}
.header__auth-registration {
  font-size: 13px;
  font-weight: 400;
  color: #22253B;
  cursor: pointer;
}
.header__burger{
  display: none;
}
.modal-overlay {
  display: none;
}
@media (max-width: 890px) {
  .header__nav-list ,.header__auth-registration{
    display: none;
  }
  .header__burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 17px;
    padding-right: 12px;
  }
  .header__burger span {
    width: 17px;
    height: 2px;
    background-color: #F15525;
    display: block;
  }
  .header__wrapper {
   padding: 10px;
  }
  .header__auth{
    margin-right: 70px;
  }
  .header {
    padding: 14px 7px;
  }
  .header__logo {
    padding-left: 14px;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1000;
    padding: 10px;
  }

  .modal-content {
    background: white;
    width: 300px;
    height: 100vh;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  .modal-nav-list {
    list-style: none;
    padding: 0;
  }

  .modal-nav-item a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: #22253b;
    display: block;
    margin-bottom: 15px;
  }

  .modal-nav-item a:hover {
    color: #f15525;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1000;
    padding: 10px;
  }

  .modal-content {
    background: white;
    width: 250px;
    height: 93vh;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  .modal-close-btn {
    position: relative;
    top: 0;
   left: 220px;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    margin-bottom: 13px;
  }

  .modal-close-btn:hover {
    color: #f15525;
  }

  .modal-nav-list {
    list-style: none;
    padding: 0;
  }

  .modal-nav-item a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600 !important;
    color: #22253b;
    display: block;
    margin-bottom: 15px;
  }

  .modal-nav-item a:hover {
    color: #f15525;
  }


  .modal-login-btn:hover {
    background-color: #38bff2;
  }
  .modal-login-btn {
    background: #38BFF2;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    width: 132px;
    height: 49px;
    position: relative;
    bottom: -620px;
  }

  .modal-login-btn:hover {
    background-color: #38bff2;
  }
}

</style>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>
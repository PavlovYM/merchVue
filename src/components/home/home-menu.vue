<template>
  <div class="home-menu--wrapper">
    <div class="container">
      <div class="home-menu">
        <div class="home-menu--block">
          <router-link to="/scheme" @click.native="scrollToTop">
            <img src="@/assets/img/menu1.png" alt="alt">
            <span>Схема работы</span>
          </router-link>
        </div>
        <div class="home-menu--block">
          <router-link to="/size" @click.native="scrollToTop">
            <img src="@/assets/img/menu2.png" alt="alt">
            <span>Размеры</span>
          </router-link>
        </div>
        <div class="home-menu--block">
          <router-link to="/revievs" @click.native="scrollToTop">
            <img src="@/assets/img/menu3.png" alt="alt">
            <span>Отзывы</span>
          </router-link>
        </div>
        <div class="home-menu--block">
          <router-link to="/question" @click.native="scrollToTop">
            <img src="@/assets/img/menu4.png" alt="alt">
            <span>Вопрос-ответ</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-menu",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
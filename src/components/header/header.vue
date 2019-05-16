<template>
  <header :class="{'open': menuOpen}">
    <div class="top-line">
      <div class="container">
        <div class="top-line--wrapper">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/img/logo.png" alt="logo">
            </router-link>
          </div>
          <div class="menuWrapp">
            <div class="menu">
              <div class="menu-hamburger" v-on:click="ToggleMenu">
                <div class="top" :class="{'open': menuOpen}"></div>
                <div class="middle" :class="{'open': menuOpen}"></div>
                <div class="bottom" :class="{'open': menuOpen}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation" :class="{'open': menuOpen}">
      <nav>
        <ul role="navigation">
          <li>
            <router-link to="/" @click.native="ToggleMenu">Главная</router-link>
          </li>
          <li>
            <router-link to="/scheme" @click.native="ToggleMenu">Схема работы</router-link>
          </li>
          <li>
            <router-link to="/size" @click.native="ToggleMenu">Размеры</router-link>
          </li>
          <li>
            <router-link to="/revievs" @click.native="ToggleMenu">Отзывы</router-link>
          </li>
          <li>
            <a href="tel:111">+38(063) 123 44 99</a>
          </li>
          <li>
            <a href="tel:111">+38(063) 123 44 99</a>
          </li>
          <li>
            <a href="mailto:111">test@gmail.com</a>
          </li>
        </ul>
      </nav>
      <nav role="navigation" class="header-social">
        <li>
          <a href>
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="fab fa-vk"></i>
          </a>
        </li>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    ToggleMenu: function() {
      this.menuOpen = !this.menuOpen;
      window.scrollTo(0, 0);
    }
  }
};
</script>

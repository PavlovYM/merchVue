<template>
  <div class="category">
    <div class="container">
      <h2>Наша Продукция</h2>
      <p></p>
      <nav>
        <li v-for="product in products" v-bind:key="product.id">
          <router-link :to="'/product/' + product.id" @click.native="scrollToTop">
            <span class="left">
              <img :src="product.icon" :alt="product.name">
              <span>{{product.name}}</span>
            </span>
            <span class="right">
              <i class="fas fa-chevron-right"></i>
            </span>
          </router-link>
        </li>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
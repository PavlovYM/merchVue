<template>
  <div class="back">
    <router-link to="/" @click.native="scrollToTop">
      <i class="fas fa-step-backward"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "back",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
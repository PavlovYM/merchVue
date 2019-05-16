<template>
  <div class="home">
    <div class="top-baner">
      <p>CUSTOM MERCH - УДОБНЫЙ СЕРВИС ДЛЯ СОЗДАНИЯ ПРИНТОВ НА ОДЕЖДЕ ПО ИНДИВИДУАЛЬНОМУ ЗАКАЗУ.</p>
      <img src="@/assets/img/top-baner.png" alt="top">
    </div>
    <category/>
    <description/>
    <homeMenu/>
    <contact/>
  </div>
</template>

<script>
import category from "@/components/home/category";
import description from "@/components/home/description";
import homeMenu from "@/components/home/home-menu";
import contact from "@/components/home/contact";
export default {
  name: "home",
  components: {
    category,
    description,
    homeMenu,
    contact
  }
};
</script>

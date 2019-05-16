<template>
  <div id="app">
    <myHeader/>
    <div class="content">
      <router-view/>
    </div>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from "@/components/header/header";
import myFooter from "@/components/footer/footer";

export default {
  name: "app",
  components: {
    myHeader,
    myFooter
  }
};
</script>




<template>
  <div class="revievs">
    <div class="container">
      <div class="revievs-title">
        <h2>Отзывы</h2>
      </div>
      <div class="revievs-text">
        <h2>
          <span>НАМИ</span>
          <span>ДОВОЛЬНЫ</span>
        </h2>
      </div>
    </div>
    <div class="top-slide">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/img/logo/l1.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l2.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l3.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l4.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l5.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l6.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l7.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l8.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l9.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l10.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l11.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l12.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l13.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l14.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l15.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l16.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l17.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l18.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l19.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l20.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l21.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l22.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l23.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l24.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l25.png" alt="logo">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/logo/l26.png" alt="logo">
        </swiper-slide>
      </swiper>
    </div>
    <div class="slider-revievs">
      <swiper :options="revievsOption">
        <swiper-slide>
          <img src="@/assets/img/reviews/1.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/2.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/3.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/4.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/5.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/6.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/7.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/8.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/9.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/10.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/11.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/12.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/13.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/14.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/15.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/16.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/17.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/18.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/19.jpg" alt="alt">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/reviews/20.jpg" alt="alt">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "revievs",
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        autoplay: true,
        spaceBetween: 15
      },
      revievsOption: {
        autoplay: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
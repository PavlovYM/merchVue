<template>
  <div class="question">
    <div class="container">
      <div class="question__wrapper">
        <h2>Вопрос ответ</h2>

        <p class="question-title">1. Самый часто задаваемый вопрос: Где мы берем одежду?</p>
        <p class="question-text">
          Вся продукция, представленная на сайте, изготавливается нашим магазином индивидуально для
          каждого клиента
        </p>
        <p class="question-title">2. Что значит «индивидуально для каждого»?</p>
        <p class="question-text">
          Мы разработали модельный ряд, под него лекала и размерную сетку, по которой
          осуществляется пошив одежды.
          Получается вы выбираете нужный товар нашого бренда, цвет, размер , принт по желанию и исходя из этого наши
          мастера
          по пошиву изготавливают изделие.
        </p>
        <p class="question-title">3. Можем пошить изделие по параметрам?</p>
        <p class="question-text">
          Да, конечно! Самое главное - правильно измерять параметры.
          Замеры нужно снимать не по человеку, а по изделию, которое хорошо на нем сидит.
        </p>
        <p class="question-title">4. Занимаемся ли мы пошивом детской одежды?</p>
        <p class="question-text">
          Наш магазин может создать свитшот или футболку для детей от 6 месяцев и старше.
          Для оформления заказа нужны точные параметры каждого малыша.
        </p>
        <p class="question-title">5. В каком городе находимся и есть ли самовывоз?</p>
        <p class="question-text">
          Город Харьков!
          Из-за большого объёма заказов мы не успеваем лично передавать их клиентам. Поэтому все посылки мы отправляем
          Новой
          Почтой. Сроки доставки 1-3 дня.
        </p>
        <p class="question-title">6. Что за ткань, какого качества?</p>
        <p class="question-text">
          Уже на протяжении 2-х лет мы работаем с одной проверенной европейской тканью.
          Двунитка - демисезонные изделия
          Трехнитка - теплые модели с начесом
          Кулир - хлопковая ткань, для пошива футболок и топиков
          Ткань комфортная, удобна в уходе, рекомендации по уходу указаны на бирках нашей одежды.
        </p>
        <p class="question-title">7. Как наносим принты и возможно напечатать свой?</p>
        <p class="question-text">
          С помощью термотрасферной печати мы переносим изображения на одежду и всегда рады
          реализовать идеи наших клиентов.
          Благодаря качеству пленки flex, принт выдерживает более 100 стирок, при правильном уходе. Мы всегда создаем
          визуализацию изделия с принтом, чтобы вы утвердили расположение и размер печати – БЕСПЛАТНО!
        </p>
      </div>
    </div>
    <back/>
  </div>
</template>

<script>
import back from "@/components/back.vue";
export default {
  name: "question",
  components: {
    back
  }
};
</script>
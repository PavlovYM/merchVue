<template>
  <div class="container">
    <div class="product">
      <div class="product-name">
        <h2>{{ product.name }}</h2>
      </div>
      <div class="product-img">
        <div class="product-img__button">
          <button v-on:click="side = true" :class="side? 'active' : '' ">Вид спереди</button>
          <button
            v-show="product.back"
            v-on:click="side = false"
            :class="side? '' : 'active' "
          >Вид сзади</button>
        </div>
        <img :src="(side ? product.front : product.back) + (colorURL + '.png')" :alt="product.name">
      </div>
      <div class="product-color">
        <h2 class="secondary-title">Цвет</h2>
        <div class="product-color__wrapper">
          <button
            v-for="(color, i) in colors"
            v-bind:key="color.id"
            v-bind:style="{background : color.background}"
            v-bind:class="{active: color.active}"
            v-on:click="changeColor(i)"
          ></button>
        </div>
      </div>
      <div class="product-size">
        <h2 class="secondary-title">Размер</h2>
        <div class="product-size__wrapper" v-show="product.size">
          <button
            v-for="(size, i) in sizes"
            v-bind:key="size.name"
            v-bind:class="{active: size.active}"
            v-on:click="changeSize(i)"
          >{{size.name}}</button>
        </div>
        <div class="size-image" v-if="product.sizeImage">
          <img :src="product.sizeImage.url" :alt="product.sizeImage.name">
        </div>
      </div>
      <div class="product-price">
        <h2 class="secondary-title">Прайс</h2>
        <div class="table">
          <div class="table-title">
            <div class="table-title__item">Шт.</div>
            <div class="table-title__item" v-show="priceFleece.position">
              <button
                v-on:click="FleeceActive"
                v-bind:class="{active: priceFleece.active}"
              >{{priceFleece.name}}</button>
            </div>
            <div class="table-title__item" v-show="priceDemiseason.position">
              <button
                v-on:click="DemiseasonActive"
                v-bind:class="{active: priceDemiseason.active}"
              >{{priceDemiseason.name}}</button>
            </div>
          </div>
          <div class="table-content">
            <div class="table-content__columns">
              <div class="table-content-item">1-4</div>
              <div class="table-content-item">5-15</div>
              <div class="table-content-item">15-30</div>
              <div class="table-content-item">30+</div>
            </div>
            <div class="table-content__columns" v-show="priceFleece.position">
              <div
                class="table-content-item"
                v-for="item in priceFleece.priceList"
                v-bind:key="item.step"
              >{{item.cost}} грн.</div>
            </div>
            <div class="table-content__columns" v-show="priceDemiseason.position">
              <div
                class="table-content-item"
                v-for="item in priceDemiseason.priceList"
                v-bind:key="item.step"
              >{{item.cost}} грн.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-quantity">
        <h2 class="secondary-title">Колличество товара</h2>
        <div class="product-quantity__wrapper">
          <number-input :value="1" v-model="quantity" :min="1" center controls></number-input>
        </div>
      </div>
      <div class="product-select">
        <h2 class="secondary-title">Размер принта</h2>
        <multiselect
          v-model="selected"
          track-by="label"
          label="label"
          :searchable="false"
          :allow-empty="false"
          :options="options"
          deselect-label
          :show-labels="false"
        ></multiselect>
      </div>

      <div class="product-total">
        <h2 class="secondary-title">Цена</h2>
        <h2>{{total}} грн.</h2>
        <p v-show="printPRICE > 0">
          цена за принт
          <span>{{printPRICE}} грн.</span>
        </p>
        <p>
          цена изделия
          <span>{{pricePRICE}}грн.</span>
        </p>
      </div>
      <div class="product-add">
        <button v-on:click="modal = true">ЗАКАЗАТЬ</button>
      </div>
    </div>
    <back/>
    <div class="modal" v-show="modal">
      <div class="modal-close">
        <button class="modal-close__button" v-on:click="modal = false">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-title">
        <h2>ЗАПОЛНИТЕ ФОРМУ ОБРАТНОЙ СВЯЗИ</h2>
        <p>и получите консультацию</p>
      </div>
      <div class="modal-form">
        <form>
          <div class="modal-input__wrapper">
            <input type="text" name="name" placeholder="Имя">
            <span>error</span>
          </div>
          <div class="modal-input__wrapper">
            <input type="tel" name="phone" placeholder="Телефон">
            <span>error</span>
          </div>
          <div class="modal-input__file">
            <label>Добавьте файл (до 10мб)</label>
            <input type="file" name="file">
            <span>error</span>
          </div>
          <div class="modal-input__wrapper">
            <input type="text" name="file-link" placeholder="ставте ссылку на изображение">
            <span>error</span>
          </div>
          <div class="modal-input__wrapper">
            <textarea name="message" placeholder="Комментарий к заказу" cols="30" rows="10"></textarea>
          </div>
          <div class="modal-input__wrapper">
            <input type="submit" value="Отправить">
          </div>
          <p>В зависимости от поставленной задачи стандартная цена может измениться</p>

          <div class="hidden-form">
            <label>
              Колличество
              <input disabled type="text" v-model="quantity">
            </label>
            <label>
              цена
              <input disabled type="text" v-model="total">
            </label>
            <label>
              цвет
              <input disabled type="text" v-model="colorActive">
            </label>
            <label>
              размер
              <input disabled type="text" v-model="sizeActive">
            </label>
            <label>
              размер принта
              <input disabled type="text" v-model="selected.label">
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import back from "@/components/back.vue";
import Multiselect from "vue-multiselect";
export default {
  name: "product",
  data() {
    return {
      modal: false,
      colorActive: 0,

      options: [],
      side: true,
      colors: [],
      sizes: [],
      colorURL: 0,
      priceFleece: [],
      priceDemiseason: [],
      quantity: 1,
      selected: { id: 0, label: "Без принта" },
      options: [
        { id: 0, label: "Без принта" },
        { id: 1, label: "10*15см" },
        { id: 2, label: "10*20см" },
        { id: 3, label: "15*30см" },
        { id: 4, label: "20*40см" }
      ],

      printPRICE: "",
      pricePRICE: ""
    };
  },
  computed: {
    product() {
      const id = parseInt(this.$route.params.id);
      return this.$store.state.products.filter(function(c) {
        return c.id === id;
      })[0];
    },

    sizeActive() {
      if (this.sizes != false) {
        let size = this.sizes;
        let sizeActiive;
        size.map((value, index) => {
          if (value.active == true) {
            sizeActiive = value.name;
          }
        });
        return sizeActiive;
      }
    },

    total() {
      let quantity = this.quantity;
      let printOptions = 1;

      let discount;
      let discountCost;

      let selectStep = this.selected.id;
      let selectPrice = 0;

      if (this.priceFleece.active == true) {
        discount = this.priceFleece.priceList;
      } else if (this.priceDemiseason.active == true) {
        discount = this.priceDemiseason.priceList;
      } else {
        alert("error");
      }

      if (quantity <= 4) {
        discountCost = discount.step1.cost;
      } else if (quantity <= 15) {
        discountCost = discount.step2.cost;
      } else if (quantity <= 30) {
        discountCost = discount.step3.cost;
      } else {
        discountCost = discount.step4.cost;
      }

      if (selectStep == 0) {
        selectPrice = 0;
      } else if (selectStep == 1) {
        if (quantity <= 4) {
          selectPrice = 50;
        } else if (quantity <= 15) {
          selectPrice = 40;
        } else if (quantity <= 30) {
          selectPrice = 35;
        } else {
          selectPrice = 35;
        }
      } else if (selectStep == 2) {
        if (quantity <= 4) {
          selectPrice = 70;
        } else if (quantity <= 15) {
          selectPrice = 50;
        } else if (quantity <= 30) {
          selectPrice = 45;
        } else {
          selectPrice = 45;
        }
      } else if (selectStep == 3) {
        if (quantity <= 4) {
          selectPrice = 90;
        } else if (quantity <= 15) {
          selectPrice = 70;
        } else if (quantity <= 30) {
          selectPrice = 65;
        } else {
          selectPrice = 65;
        }
      } else if (selectStep == 4) {
        if (quantity <= 4) {
          selectPrice = 130;
        } else if (quantity <= 15) {
          selectPrice = 100;
        } else if (quantity <= 30) {
          selectPrice = 90;
        } else {
          selectPrice = 90;
        }
      } else {
        alert("error");
      }
      this.pricePRICE = discountCost;
      this.printPRICE = selectPrice;

      return (selectPrice + discountCost) * quantity;
    }
  },
  created() {
    this.colors = this.product.color;
    this.sizes = this.product.size;
    this.priceFleece = this.product.price.fleece;
    this.priceDemiseason = this.product.price.demiseason;
  },
  methods: {
    changeColor(index) {
      this.colors.map((c, i) => {
        c.active = i != index ? false : true;

        let d = index;
        this.colorURL = d;
        this.colorActive = d;
      });
    },
    changeSize(index) {
      this.sizes.map((c, i) => {
        c.active = i != index ? false : true;
      });
    },
    FleeceActive() {
      this.priceFleece.active = true;
      this.priceDemiseason.active = false;
      this.cost = this.priceFleece.priceList;
    },
    DemiseasonActive() {
      this.priceFleece.active = false;
      this.priceDemiseason.active = true;
      this.cost = this.priceDemiseason.priceList;
    }
  },
  components: {
    Multiselect,
    back
  }
};
</script>
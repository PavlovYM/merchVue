import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    products: [{
        id: 1,
        name: 'Свитшот',
        icon: '/PRODUCTS/icon/0.svg',
        front: '/PRODUCTS/0/front/',
        back: '/PRODUCTS/0/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 399
              },
              step2: {
                cost: 330
              },
              step3: {
                cost: 280
              },
              step4: {
                cost: 230
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 499
              },
              step2: {
                cost: 430
              },
              step3: {
                cost: 380
              },
              step4: {
                cost: 330
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],
        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 2,
        name: 'Реглан',
        icon: '/PRODUCTS/icon/1.svg',
        front: '/PRODUCTS/1/front/',
        back: '/PRODUCTS/1/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 399
              },
              step2: {
                cost: 330
              },
              step3: {
                cost: 280
              },
              step4: {
                cost: 230
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 499
              },
              step2: {
                cost: 430
              },
              step3: {
                cost: 380
              },
              step4: {
                cost: 330
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 3,
        name: 'Толстовка',
        icon: '/PRODUCTS/icon/2.svg',
        front: '/PRODUCTS/2/front/',
        back: '/PRODUCTS/2/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 480
              },
              step2: {
                cost: 400
              },
              step3: {
                cost: 350
              },
              step4: {
                cost: 310
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 580
              },
              step2: {
                cost: 500
              },
              step3: {
                cost: 450
              },
              step4: {
                cost: 410
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 4,
        name: 'Кенгуру',
        icon: '/PRODUCTS/icon/3.svg',
        front: '/PRODUCTS/3/front/',
        back: '/PRODUCTS/3/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 500
              },
              step2: {
                cost: 430
              },
              step3: {
                cost: 380
              },
              step4: {
                cost: 330
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 600
              },
              step2: {
                cost: 530
              },
              step3: {
                cost: 480
              },
              step4: {
                cost: 430
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 5,
        name: 'Кофта с воротником',
        icon: '/PRODUCTS/icon/4.svg',
        front: '/PRODUCTS/4/front/',
        back: '/PRODUCTS/4/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 480
              },
              step2: {
                cost: 400
              },
              step3: {
                cost: 350
              },
              step4: {
                cost: 310
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 580
              },
              step2: {
                cost: 500
              },
              step3: {
                cost: 450
              },
              step4: {
                cost: 410
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 6,
        name: 'Худи на змейке',
        icon: '/PRODUCTS/icon/5.svg',
        front: '/PRODUCTS/5/front/',
        back: '/PRODUCTS/5/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 480
              },
              step2: {
                cost: 400
              },
              step3: {
                cost: 350
              },
              step4: {
                cost: 310
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 580
              },
              step2: {
                cost: 500
              },
              step3: {
                cost: 450
              },
              step4: {
                cost: 410
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 7,
        name: 'Футболка мужская',
        icon: '/PRODUCTS/icon/6.svg',
        front: '/PRODUCTS/6/front/',
        back: '/PRODUCTS/6/back/',
        price: {
          fleece: {
            name: 'Цена',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 200
              },
              step2: {
                cost: 180
              },
              step3: {
                cost: 160
              },
              step4: {
                cost: 140
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: false,
            active: false,
            priceList: {
              step1: {
                cost: 0
              },
              step2: {
                cost: 0
              },
              step3: {
                cost: 0
              },
              step4: {
                cost: 0
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#e1e1e1'
          },
          {
            id: 1,
            active: false,
            background: '#232323'
          },
          {
            id: 2,
            active: false,
            background: '#fefefe'
          },
          {
            id: 3,
            active: false,
            background: '#f6c0de'
          },
          {
            id: 4,
            active: false,
            background: '#600a1f'
          },
          {
            id: 5,
            active: false,
            background: '#bae5d0'
          },
          {
            id: 6,
            active: false,
            background: '#0c132e'
          },
          {
            id: 7,
            active: false,
            background: '#b393c9'
          },
          {
            id: 8,
            active: false,
            background: '#555'
          },
          {
            id: 9,
            active: false,
            background: '#81a3d4'
          },
          {
            id: 10,
            active: false,
            background: '#5b2081'
          },
          {
            id: 11,
            active: false,
            background: '#d32c5c'
          },
          {
            id: 12,
            active: false,
            background: '#2bc2cf'
          },
          {
            id: 13,
            active: false,
            background: '#6aaa2f'
          },
          {
            id: 14,
            active: false,
            background: '#f8e34a'
          },
          {
            id: 15,
            active: false,
            background: '#c72e2a'
          },
          {
            id: 16,
            active: false,
            background: '#e0dfb5'
          },

        ]
      },
      {
        id: 8,
        name: 'Футболка женская',
        icon: '/PRODUCTS/icon/7.svg',
        front: '/PRODUCTS/7/front/',
        back: '/PRODUCTS/7/back/',
        price: {
          fleece: {
            name: 'Цена',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 200
              },
              step2: {
                cost: 180
              },
              step3: {
                cost: 160
              },
              step4: {
                cost: 140
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: false,
            active: false,
            priceList: {
              step1: {
                cost: 0
              },
              step2: {
                cost: 0
              },
              step3: {
                cost: 0
              },
              step4: {
                cost: 0
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],

        color: [{
            id: 0,
            active: true,
            background: '#e1e1e1'
          },
          {
            id: 1,
            active: false,
            background: '#232323'
          },
          {
            id: 2,
            active: false,
            background: '#fefefe'
          },
          {
            id: 3,
            active: false,
            background: '#f6c0de'
          },
          {
            id: 4,
            active: false,
            background: '#600a1f'
          },
          {
            id: 5,
            active: false,
            background: '#bae5d0'
          },
          {
            id: 6,
            active: false,
            background: '#0c132e'
          },
          {
            id: 7,
            active: false,
            background: '#b393c9'
          },
          {
            id: 8,
            active: false,
            background: '#555'
          },
          {
            id: 9,
            active: false,
            background: '#81a3d4'
          },
          {
            id: 10,
            active: false,
            background: '#5b2081'
          },
          {
            id: 11,
            active: false,
            background: '#d32c5c'
          },
          {
            id: 12,
            active: false,
            background: '#2bc2cf'
          },
          {
            id: 13,
            active: false,
            background: '#6aaa2f'
          },
          {
            id: 14,
            active: false,
            background: '#f8e34a'
          },
          {
            id: 15,
            active: false,
            background: '#c72e2a'
          },
          {
            id: 16,
            active: false,
            background: '#e0dfb5'
          },

        ]
      },
      {
        id: 9,
        name: 'Кроп - топ',
        icon: '/PRODUCTS/icon/8.svg',
        front: '/PRODUCTS/8/front/',
        back: '/PRODUCTS/8/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 379
              },
              step2: {
                cost: 310
              },
              step3: {
                cost: 260
              },
              step4: {
                cost: 210
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 479
              },
              step2: {
                cost: 410
              },
              step3: {
                cost: 360
              },
              step4: {
                cost: 310
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],
        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 10,
        name: 'Кроп - худи',
        icon: '/PRODUCTS/icon/9.svg',
        front: '/PRODUCTS/9/front/',
        back: '/PRODUCTS/9/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 420
              },
              step2: {
                cost: 360
              },
              step3: {
                cost: 310
              },
              step4: {
                cost: 250
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: true,
            active: false,
            priceList: {
              step1: {
                cost: 520
              },
              step2: {
                cost: 460
              },
              step3: {
                cost: 410
              },
              step4: {
                cost: 350
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],
        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#7dddb3'
          },
          {
            id: 5,
            active: false,
            background: '#113300'
          },
          {
            id: 6,
            active: false,
            background: 'linear-gradient(135deg,#dcdcdc 0,#dcdcdc 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 7,
            active: false,
            background: 'linear-gradient(135deg,#a1a1a1 0,#a1a1a1 47%,#a0c19c 50%,#000 54%,#000 100%,#000 100%)'
          },
          {
            id: 8,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 9,
            active: false,
            background: '#fff'
          },
          {
            id: 10,
            active: false,
            background: '#97ff5e'
          },
          {
            id: 11,
            active: false,
            background: '#45773f'
          },
          {
            id: 12,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 13,
            active: false,
            background: '#78a5d7'
          },
          {
            id: 14,
            active: false,
            background: '#7428a6'
          },
          {
            id: 15,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 16,
            active: false,
            background: '#48020c'
          },
          {
            id: 17,
            active: false,
            background: '#057b7b'
          },
          {
            id: 18,
            active: false,
            background: '#0744a1'
          },
          {
            id: 19,
            active: false,
            background: '#ea9770'
          },
          {
            id: 20,
            active: false,
            background: '#cc23a0'
          },
        ]
      },
      {
        id: 11,
        name: 'Топик',
        icon: '/PRODUCTS/icon/10.svg',
        front: '/PRODUCTS/10/front/',
        back: '/PRODUCTS/10/back/',
        price: {
          fleece: {
            name: 'Демисезон',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 200
              },
              step2: {
                cost: 180
              },
              step3: {
                cost: 160
              },
              step4: {
                cost: 140
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: false,
            active: false,
            priceList: {
              step1: {
                cost: 520
              },
              step2: {
                cost: 460
              },
              step3: {
                cost: 410
              },
              step4: {
                cost: 350
              }
            }
          }
        },
        size: [{
            name: 'XXS',
            active: true
          },
          {
            name: 'XS',
            active: false
          },
          {
            name: 'S',
            active: false
          },
          {
            name: 'M',
            active: false
          },
          {
            name: 'L',
            active: false
          },
          {
            name: 'XL',
            active: false
          },
          {
            name: 'XXL',
            active: false
          },
          {
            name: 'OVERSIZE',
            active: false
          },
        ],
        color: [{
            id: 0,
            active: true,
            background: '#e1e1e1'
          },
          {
            id: 1,
            active: false,
            background: '#232323'
          },
          {
            id: 2,
            active: false,
            background: '#fefefe'
          },
          {
            id: 3,
            active: false,
            background: '#f6c0de'
          },
          {
            id: 4,
            active: false,
            background: '#600a1f'
          },
          {
            id: 5,
            active: false,
            background: '#bae5d0'
          },
          {
            id: 6,
            active: false,
            background: '#0c132e'
          },
          {
            id: 7,
            active: false,
            background: '#b393c9'
          },
          {
            id: 8,
            active: false,
            background: '#555'
          },
          {
            id: 9,
            active: false,
            background: '#81a3d4'
          },
          {
            id: 10,
            active: false,
            background: '#5b2081'
          },
          {
            id: 11,
            active: false,
            background: '#d32c5c'
          },
          {
            id: 12,
            active: false,
            background: '#2bc2cf'
          },
          {
            id: 13,
            active: false,
            background: '#6aaa2f'
          },
          {
            id: 14,
            active: false,
            background: '#f8e34a'
          },
          {
            id: 15,
            active: false,
            background: '#c72e2a'
          },
          {
            id: 16,
            active: false,
            background: '#e0dfb5'
          },

        ]
      },
      {
        id: 12,
        name: 'Фартук',
        icon: '/PRODUCTS/icon/11.svg',
        front: '/PRODUCTS/11/front/',
        back: false,
        price: {
          fleece: {
            name: 'Цена',
            position: true,
            active: true,
            priceList: {
              step1: {
                cost: 150
              },
              step2: {
                cost: 145
              },
              step3: {
                cost: 140
              },
              step4: {
                cost: 130
              }
            }
          },
          demiseason: {
            name: 'Флис',
            position: false,
            active: false,
            priceList: {
              step1: {
                cost: 0
              },
              step2: {
                cost: 0
              },
              step3: {
                cost: 0
              },
              step4: {
                cost: 0
              }
            }
          }
        },
        size: false,
        sizeImage: {
          name: 'Size Image',
          url: '/PRODUCTS/fart-size.jpg'
        },
        color: [{
            id: 0,
            active: true,
            background: '#000'
          },
          {
            id: 1,
            active: false,
            background: '#d2d2d2'
          },
          {
            id: 2,
            active: false,
            background: '#f696cb'
          },
          {
            id: 3,
            active: false,
            background: '#c20b19'
          },
          {
            id: 4,
            active: false,
            background: '#e0dfb5'
          },
          {
            id: 5,
            active: false,
            background: '#a0a0a0'
          },
          {
            id: 6,
            active: false,
            background: '#fff'
          },
          {
            id: 7,
            active: false,
            background: '#45773f'
          },
          {
            id: 8,
            active: false,
            background: '#2a4b7c'
          },
          {
            id: 9,
            active: false,
            background: '#e6ea46'
          },
          {
            id: 10,
            active: false,
            background: '#48020c'
          },
          {
            id: 11,
            active: false,
            background: '#0744a1'
          },
        ]
      },
    ]
  },
  getters: {

  },
  methods: {

  },
  mutations: {

  },
  actions: {

  }
})
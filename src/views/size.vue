<template>
  <div class="size">
    <div class="container">
      <div class="size-title">
        <h2>Размеры</h2>
      </div>
    </div>
    <div class="size-wrapper">
      <div class="size-img">
        <img src="@/assets/img/size-img.png" alt="size">
      </div>
      <div class="container">
        <div class="size-table">
          <div class="size-table">
            <div class="left" v-show="men">
              <button v-on:click="vomenShow">
                <i class="fas fa-chevron-left"></i>МУЖСКОЙ
                <i class="fas fa-chevron-right"></i>
              </button>
              <table>
                <tr>
                  <th>
                    Размер
                    EU/UA
                  </th>
                  <th>
                    Ширина
                    Объем груди
                  </th>
                  <th>
                    Длинна
                    изделия
                  </th>
                </tr>
                <tr>
                  <td>XS/44</td>
                  <td>47-46</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>S/46</td>
                  <td>49-50</td>
                  <td>65</td>
                </tr>
                <tr>
                  <td>M/48</td>
                  <td>51-52</td>
                  <td>67</td>
                </tr>
                <tr>
                  <td>L/50</td>
                  <td>53-54</td>
                  <td>69</td>
                </tr>
                <tr>
                  <td>XL/52</td>
                  <td>55-56</td>
                  <td>71</td>
                </tr>
                <tr>
                  <td>XXL/54</td>
                  <td>57-58</td>
                  <td>73</td>
                </tr>
              </table>
            </div>
            <div class="right" v-show="vomen">
              <button v-on:click="menShow">
                <i class="fas fa-chevron-left"></i>ЖЕНСКИЙ
                <i class="fas fa-chevron-right"></i>
              </button>
              <table>
                <tr>
                  <th>
                    Размер
                    EU/UA
                  </th>
                  <th>
                    Ширина
                    Объем груди
                  </th>
                  <th>
                    Длинна
                    изделия
                  </th>
                </tr>
                <tr>
                  <td>XXS/40</td>
                  <td>41-42</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td>XS/42</td>
                  <td>43-44</td>
                  <td>58</td>
                </tr>
                <tr>
                  <td>S/44</td>
                  <td>44-45</td>
                  <td>59</td>
                </tr>
                <tr>
                  <td>M/46</td>
                  <td>45-46</td>
                  <td>61</td>
                </tr>
                <tr>
                  <td>L/48</td>
                  <td>47-48</td>
                  <td>62</td>
                </tr>
                <tr>
                  <td>XL/50</td>
                  <td>50-51</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>XXL/52</td>
                  <td>52-53</td>
                  <td>64</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "size",
  data() {
    return {
      men: false,
      vomen: true
    };
  },
  methods: {
    menShow: function() {
      this.vomen = false;
      this.men = true;
    },
    vomenShow: function() {
      this.vomen = true;
      this.men = false;
    }
  }
};
</script>
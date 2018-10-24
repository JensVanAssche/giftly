<template>
  <div class="checkout container">
    <h1 class="page-title">Betalen</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">E-mail</label>
              <input type="email" class="form-control" id="inputEmail4" value="info@giftly.com">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Wachtwoord</label>
              <input type="password" class="form-control" id="inputPassword4" value="wachtwoord">
            </div>
          </div>
          <h5>Leveradres</h5>
          <div class="form-group">
            <label for="inputAddress">Adres</label>
            <input type="text" class="form-control" id="inputAddress" value="Salesianenlaan 92">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Adres 2</label>
            <input type="text" class="form-control" id="inputAddress2">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Stad</label>
              <input type="text" class="form-control" id="inputCity" value="Hoboken">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Gemeente</label>
              <select id="inputState" class="form-control">
                <option selected>Kies...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Postcode</label>
              <input type="text" class="form-control" id="inputZip" value="2660">
            </div>
          </div>
          <h5>Levertijd</h5>
          <div class="form-row">
            <div class="form-group">
              <input type="checkbox" id="deliveryCheck" class="mx-2" v-model="checked">
              <label for="deliveryCheck">Kies aangepaste levertijd</label>
              <input v-if="checked == true" type="date" class="form-control" id="inputDate">
            </div>
          </div>
          <!-- <div v-if="$store.state.currentBox.name == 'Liefdadigheid'">
            <h5>Liefdadigheid opties</h5>
            <div class="form-group">
              <label for="nameRecepient">Naam v/d ontvanger</label>
              <input type="text" name="" class="form-control" id="nameRecepient">
            </div>
          </div> -->
          <h5>Paketje aanpassen</h5>
          <div class="form-group">
            <label>Tekstje bij uw pakje: (laat leeg om geen tekstje toe te voegen)</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>Inpakpapier kiezen</label>
            <div>
              <input type="radio" name="wrappingpaper" value="-1" id="-1" class="mx-2">
              <label for="-1">Geen inpakpapier</label>
            </div>
            <div>
              <label class="wrappingpaperlabel" v-for="(value, key) in wrappingpaper" :key="key">
                <input type="radio" name="wrappingpaper" :value="key">
                <img :src="value">
              </label>
            </div>
          </div>
        </form>
        <button type="button" class="btn btn-red mb-2" @click="pay" data-dismiss="modal">Nu Betalen</button>
      </div>
      <div class="col-md-3"></div>
      <!-- Current packages in the shopping cart  -->
      <div class="col-md-3">
        <h2>Jouw bestelling:</h2>
        <h3>Totaal: € {{ totalPrice }}</h3>
        <transition-group name="rotateDownRight" tag="div" class="row justify-content-around">
          <div v-for="(item, i) in shoppingCart" :key="i" class="col-12 mt-2">
            <Card :key="i" :name="item.name" :boxImg="item.img" :deliveryTime="item.deliveryTime" class="card">
            </Card>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import PayModal from "@/components/PayModal";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PayModal,
    Card
  },
  computed: {
    ...mapState([
        'shoppingCart'
      ]),
    ...mapGetters([
      'totalPrice'
    ])
  },
  methods: {
    ...mapMutations([
      'clearCart', 
      'showAlert'
    ]),
    pay() {
      this.clearCart();
      this.$router.push({ name: 'home' })
      this.showAlert({ type: 'success', header: 'Bedankt.', message: 'Bedankt om bij ons te kopen. Je zal binnenkort een e-mail ontvangen met verdere instructies! Nog veel plezier met het cadeau.' });
    }
  },
  data () {
    return {
      checked: false,
      wrappingpaper: [
        "https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/291874-kids-everyday-wrap-animals1.jpg",
        "https://cdn.notonthehighstreet.com/system/product_images/images/001/238/763/original_recycled-red-chevron-white-wrapping-paper.jpg",
        "https://cdn.notonthehighstreet.com/system/product_images/images/001/228/606/original_recycled-blue-chevron-wrapping-paper.jpg",
        "https://www.rexlondon.com/sites/dotcom.pleasetest.co.uk/files/styles/uc_product_full/public/25024%20%28swatch%29.jpg",
        "https://www.sassandbelle.co.uk/Images/Product/Default/xlarge/WRAP048.jpg",
        "https://cdn.shopify.com/s/files/1/0794/1765/products/CarpenterHill_WrappingPaper_Astral_Reindeer_Pixel_Snowflake_large.png?v=1508785655",
        "https://cdn.notonthehighstreet.com/system/product_images/images/001/228/605/original_recycled-white-star-brown-wrapping-paper.jpg",
        "https://www.sassandbelle.co.uk/Images/Product/Default/xlarge/WRAP066.jpg"
      ]
    }
  }
}
</script>


<style type="text/css" scoped>
.wrappingpaperlabel > input {
  /* HIDE RADIO */
  visibility: hidden; /* Makes input not-clickable */
  position: absolute; /* Remove input from document flow */
}
.wrappingpaperlabel > input + img {
  /* IMAGE STYLES */
  cursor: pointer;
  border: 2px solid transparent;
  width: 100px;
}
.wrappingpaperlabel > input:checked + img {
  /* (RADIO CHECKED) IMAGE STYLES */
  border: 2px solid #f00;
}
.wrappingpaperlabel {
  margin: 5px;
}
</style>
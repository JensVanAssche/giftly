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
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Mij onthouden
              </label>
            </div>
          </div>
        </form>
        <button type="button" class="btn btn-red mb-2" @click="showAlert" data-dismiss="modal">Betalen</button>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <h2>Jouw bestelling:</h2>
        <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" :deliveryTime="$store.state.currentBox.deliveryTime"></Card>
        <p v-if="$store.state.boxSelectChoice">Categorie: {{ $store.state.boxSelectChoice }}</p>
        <p v-if="$store.state.boxSelectSex">Geslacht: {{ $store.state.boxSelectSex }}</p>
        <p v-if="$store.state.boxSelectAge">Leeftijd: {{ $store.state.boxSelectAge }}</p>
        <h3>Totaal prijs: €{{ price }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import PayModal from "@/components/PayModal";

export default {
  components: {
    PayModal,
    Card
  },
  computed: {
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('updatePrice', value)
      }
    }
  },
  methods: {
    showAlert () {
      this.$store.commit('showAlert', { type: 'success', header: 'Bedankt.', message: 'Bedankt om bij ons te kopen. Je zal binnenkort een e-mail ontvangen met verdere instructies! Nog veel plezier met het cadeau.' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

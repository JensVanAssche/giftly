<template>
  <div class="checkout">
    <h1>Betalen</h1>
    <div class="row">
      <div class="col-4">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">E-mail</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Wachtwoord</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Adres</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Adres 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Stad</label>
              <input type="text" class="form-control" id="inputCity">
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
              <input type="text" class="form-control" id="inputZip">
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
        <button type="button" class="btn" @click="showAlert" data-dismiss="modal">Betalen</button>
      </div>
      <div class="col-4">
        
      </div>
      <div class="col-4">
        <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" class="col-6"></Card>
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

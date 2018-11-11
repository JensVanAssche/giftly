<template>
  <div class="checkout container mb-5">
    <h1 class="page-title">Betalen</h1>
    <div v-if="shoppingCartList.length > 0" class="row">
      <div class="col-md-6">
        <form>
          <template v-if="!isLoggedIn">
            <h5>Persoonlijke gegevens</h5>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstname">Voornaam</label>
                <input type="text" class="form-control" id="firstname" v-model="form.firstname">
              </div>
              <div class="form-group col-md-6">
                <label for="lastname">Achternaam</label>
                <input type="text" class="form-control" id="lastname" v-model="form.name">
              </div>
            </div>
            <div class="form-row pb-4">
              <div class="form-group col-md-6">
                <label for="inputEmail4">E-mail</label>
                <input type="email" class="form-control" id="inputEmail4" v-model="form.email">
              </div>
              <div class="form-group col-md-6">
                <label for="phonenumber">Telefoonnummer</label>
                <input type="text" class="form-control" id="phonenumber" v-model="form.phone">
              </div>
            </div>
          </template>
          
          <h5>Leveradres</h5>
          <div class="form-group">
            <label for="inputAddress">Adres</label>
            <input type="text" class="form-control" id="inputAddress" v-model="form.street">
          </div>
          <div class="form-row pb-4">
            <div class="form-group col-md-6">
              <label for="inputCity">Stad</label>
              <input type="text" class="form-control" id="inputCity" v-model="form.city">
            </div>
            <div class="form-group col-md-6">
              <label for="inputZip">Postcode</label>
              <input type="text" class="form-control" id="inputZip" v-model="form.postal">
            </div>
          </div>
          <h5>Levertijd</h5>
          <div class="form-row pb-4">
            <div class="form-group">
              <input type="checkbox" id="deliveryCheck" class="mx-2" v-model="checked">
              <label for="deliveryCheck">Kies aangepaste levertijd</label>
              <input v-if="checked" type="date" class="form-control" id="inputDate" :min="minDeliveryDate" v-model="form.deliveryDate" :class="{'is-invalid': formErrors.deliveryDate}">
              <span v-if="formErrors.deliveryDate" class="text-danger">{{ formErrors.deliveryDate }}</span>
            </div>
          </div>
          <h5>Pakketje aanpassen</h5>
          <div class="form-group">
            <label>Tekstje bij uw pakje: (laat leeg om geen tekstje toe te voegen)</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <div class="form-group pb-4">
            <label>Inpakpapier kiezen</label>
            <div>
              <input type="radio" name="wrappingpaper" value="-1" id="-1" class="mx-2" checked>
              <label for="-1">Geen inpakpapier</label>
            </div>
            <div>
              <label class="wrappingpaperlabel" v-for="(value, key) in this.$store.state.data.wrappingpaper" :key="key">
                <input type="radio" name="wrappingpaper" :value="key">
                <img :src="value">
              </label>
            </div>
          </div>
          <div class="form-row pb-4">
            <div class="form-group">
              <input type="checkbox" id="accountcheck" class="mx-2">
              <label for="accountcheck">Maak account aan met deze gegevens</label>
            </div>
          </div>
          <button type="button" class="btn btn-red mb-2" @click="pay">Nu Betalen</button>
        </form>
      </div>
      <div class="col-md-3"></div>
      <!-- Current packages in the shopping cart  -->
      <div class="col-md-3">
        <h2>Jouw bestelling:</h2>
        <p>Geschatte levertijd: {{ deliveryTimeString(calculateShoppingCartDeliveryDate) }}</p>
        <h3>Totaal: € {{ totalPrice }}</h3>
        <transition-group name="rotateDownRight" tag="div" class="row justify-content-around">
          <div v-for="(item, i) in shoppingCart" :key="i" class="col-12 my-3">
            <Card :key="i" :name="item.name" :boxImg="$store.state.data.categories[item.type].img" class="card">
              <DeleteButton 
                @delete="$store.commit('deleteFromCart', item.uuid)"
                rounded
                topRight
              />
              <h5 class="card-title m-0">{{ $store.state.data.categories[item.type].name }}<span v-if="item.option">: {{ item.option }}</span></h5>
            </Card>
          </div>
        </transition-group>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Niks is gratis. Daar hoef je dus ook niet voor te betalen.</p>
      <p><router-link to="/categories" class="btn btn-red">Kies iets leuks uit waar je wel voor kan betalen</router-link></p>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import DeleteButton from '@/components/DeleteButton'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    Card,
    DeleteButton,
  },
  computed: {
    ...mapState(['shoppingCart', 'shoppingCartList']),
    ...mapGetters([
      'totalPrice',
      'isLoggedIn',
      'deliveryTimeString',
      'calculateShoppingCartDeliveryDate',
      'minDeliveryDate',
    ]),
  },
  methods: {
    ...mapMutations(['clearCart', 'showAlert']),
    pay() {
      if (this.form.deliveryDate) {
        if (this.form.deliveryDate < this.minDeliveryDate) {
          this.showAlert({
            type: 'danger',
            header: 'Fout in het formulier',
            message: 'Je kan geen datum voor de eerste leverdag kiezen.',
          })
          this.formErrors.deliveryDate = 'Kies een juiste datum.'
          return false
        }
      }
      this.clearCart()
      this.$router.push({ name: 'home' })
      this.showAlert({
        type: 'success',
        header: 'Bedankt.',
        message:
          'Bedankt om bij ons te kopen. Je zal binnenkort een e-mail ontvangen met verdere instructies! Nog veel plezier met het cadeau.',
      })
    },
  },
  data() {
    return {
      checked: false,
      form: {},
      formErrors: {
        deliveryDate: '',
      },
    }
  },
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
  border: 2px solid #ff5964;
}
.wrappingpaperlabel {
  margin: 5px;
}
</style>
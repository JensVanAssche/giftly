<template>
  <div class="modal fade right" :id="`checkoutModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Details</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <template v-if="$store.state.currentBox">
            <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" class="col"></Card>
            <form v-if="category.name == 'Interesses'">
              <label>Kies interesse:</label>
              <br />
              <select v-model="boxSelectChoice" class="form-control">
                <option value=""></option>
                <option value="Boeken">Boeken</option>
                <option value="Films">Films</option>
                <option value="Muziek">Muziek</option>
                <option value="Toneel/Theater">Toneel/Theater</option>
                <option value="Gaming">Gaming</option>
                <option value="Technologie">Technologie</option>
                <option value="Eten">Eten</option>
                <option value="Reizen">Reizen</option>
                <option value="Sport">Sport</option>
                <option value="Fitness">Fitness</option>
              </select>
            </form>
            <form v-if="category.name == 'Exotisch'">
              <label>Kies werelddeel:</label>
              <br />
              <select v-model="boxSelectChoice" class="form-control">
                <option value=""></option>
                <option value="Europa">Europa</option>
                <option value="Noord-Amerika">Noord-Amerika</option>
                <option value="Zuid-Amerika">Zuid-Amerika</option>
                <option value="Azië">Azië</option>
                <option value="Afrika">Afrika</option>
                <option value="Australië">Australië</option>
              </select>
            </form>
            <form v-if="category.name == 'Liefdadigheid'">
              <label>Kies goed doel:</label>
              <br />
              <select v-model="boxSelectChoice" class="form-control">
                <option value=""></option>
                <option value="Artsen Zonder Grenzen">Artsen Zonder Grenzen</option>
                <option value="Kom Op Tegen Kanker">Kom Op Tegen Kanker</option>
                <option value="Child Focus">Child Focus</option>
                <option value="Greenpeace">Greenpeace</option>
                <option value="PETA">PETA</option>
                <option value="Unicef">Unicef</option>
              </select>
            </form>
            <form>
              <div class="form-group">
                <label>Kies uw prijs:</label>
                <label class="display-2 d-block">€ {{ price }}</label>
                <input type="range" class="form-control-range" id="formControlRange" v-model="price" min="10" step="5">
              </div>
            </form>
            <router-link to="/checkout" data-dismiss="modal" @click.native="$store.commit('updateBoxSelectChoice', boxSelectChoice)">
              <button class="btn btn-red">Nu kopen</button>
            </router-link>
            <button type="button" class="btn btn-blue" data-dismiss="modal" aria-label="Close">Annuleren</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  props: {
    category: Object,
    i: Number
  },
  components: {
    Card
  },
  computed: {
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('updatePrice', value)
      },
    }
  },
  data() {
    return {
      boxSelectChoice: '',
    }
  }
}
</script>
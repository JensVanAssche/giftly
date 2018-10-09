<template>
<div class="modal fade" :id="`categoryModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ category.name }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{ category.detailinfo }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-toggle="modal" data-dismiss="modal" :data-target="`#checkoutModal${i}`" @click="$store.commit('changeBox', category)">Ik wil deze</button>
        <button type="button" class="btn" data-dismiss="modal">Terug</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    category: Object,
    i: Number
  }
}
</script>
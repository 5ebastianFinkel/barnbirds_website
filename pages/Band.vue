<template>
  <div class="container">
    <h1>Band</h1>
    <band-card
      v-for="member in band"
      :key="member.id"
      :image-name="member.image"
      :musician-name="member.name"
      :instruments="member.instrument"
    />
  </div>
</template>

<script>
import band from 'static/band.json'

export default {
  name: 'Band',

  data () {
    return {
      band
    }
  }
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

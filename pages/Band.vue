<template>
  <div class="container">
    <div>
      <h1>Band</h1>
      <ul>
        <li v-for="member in band" :key="member.name">
          {{ member.name }}
        </li>
      </ul>
      <band-card
        :image-name="band"
        :musician-name="band.name"
      />
    </div>
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

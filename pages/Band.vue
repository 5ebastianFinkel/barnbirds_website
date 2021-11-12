<template>
  <div class="container">
    <div>
      <h1>Band</h1>
      <ul>
        <li v-for="member in band" :key="member.name"> {{ member.name }}</li>
      </ul>
      <Flicking :options="{ circular: true }">
        <div class="wrapper">
          <div v-for="member in band" :key="member.name" class="panel"> {{ member.name }}</div>
        </div>
      </Flicking>
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

.wrapper {
  width: 100%;
  height: 250px;
}

.panel {
  width: 250px;
  height: 250px;
  background-color: #f5f5f5;
}
</style>

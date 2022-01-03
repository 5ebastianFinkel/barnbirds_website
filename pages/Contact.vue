<template>
  <div class="container">
    <h1>Kontakt</h1>
    <p>
      <fa :icon="faEnvelope" />
      <a href="mailto:lets@gmail.com">letRock@barnbirds.de</a>
    </p>
    <p>
      <fa :icon="faPhone" />
      <a href="tel:+491515151515">+49 151515151515</a>
    </p>

  </div>
</template>

<script>
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Contact',
  computed: {
    faEnvelope () {
      return faEnvelope
    },
    faPhone () {
      return faPhone
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

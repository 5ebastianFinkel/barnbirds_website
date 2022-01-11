<template>
  <div>
    <img src="Instagram_Glyph_Gradient_RGB.png" class="instagram">
    <span>Folge </span>
    <a href="https://www.instagram.com/thebarnbirds" target="_blank">
      <span>#{{ username }}</span>
    </a>
    <span>auf Instagram</span>
  </div>
</template>

<script>
export default {
  name: 'InstagramLink.vue',
  data () {
    return {
      username: 'thebarnbirds'
    }
  }
}
</script>

<style scoped>
.instagram {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>

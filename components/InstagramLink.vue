<template>
  <div class="flex">
    <img src="Instagram_Glyph_Gradient_RGB.png" class="instagram" alt="Instagram Logo">
    <span>Folge </span>
    <a href="https://www.instagram.com/thebarnbirds" target="_blank" class="instagram-link">
      <span>#{{ username }}</span>
    </a>
    <span>auf Instagram</span>
  </div>
</template>

<script>
export default {
  name: 'InstagramLink',
  data () {
    return {
      username: 'thebarnbirds'
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.instagram {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.instagram-link {
  padding-left: 6px;
  padding-right: 6px;
}
</style>

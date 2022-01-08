<template>
  <div class="container">
    <h1>Playlist</h1>
    <ul>
      <li v-for="song in playlist" :key="song.id">
        {{song.artist}} - {{song.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import playlist from 'static/playlist.json'
export default {
  name: 'Playlist',
  data () {
    return {
      playlist
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

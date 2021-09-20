<template>
  <div id="app">
    <div class="theme no-sidebar">
      <header class="nav-bar">
        <div class="sidebar-button">
          <Burger/>
        </div>
        <a href="/" class="nav-bar-title">
          <img src="~/static/logo.svg" alt="Barnbirds Logo" class="logo">
        </a>
      </header>
      <main>
        <body>
        <figure>
          <img src="~/static/logo.svg" class="image" alt="Barnbirds Logo">
        </figure>
        <nuxt-link to="/posts/ira">Gesang</nuxt-link>
        </body>
      </main>
    </div>
  </div>
</template>

<script>

import Burger from '~/components/Burger'

export default {
  components: { Burger }
}
</script>

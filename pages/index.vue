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
        <h1>Willkommen auf der Website der Barnbirds</h1>
        <p>Die Seite befindet sich aktuell im Aufbau, also kommt bald wieder für mehr Infos</p>
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

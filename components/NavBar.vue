<template>
  <div>
    <div class="nav-bar">
      <div class="sidebar-button">
        <Burger/>
      </div>
      <a href="/" class="nav-bar-title">
        <img src="~/static/logo.svg" alt="Barnbirds Logo" class="logo">
      </a>
    </div>
    <Sidebar>
      <nuxt-link to="/Band">Band</nuxt-link>
    </Sidebar>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

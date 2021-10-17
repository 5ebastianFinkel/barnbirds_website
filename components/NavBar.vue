<!--

FILL THIS BLANK WITH DESCRIPTION

Author: sfinkel
Created: 2021/10/06 | 10:24 CET

-->
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
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Band">Band</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Impressum">Impressum</nuxt-link>
        </li>
      </ul>

    </Sidebar>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>
<style>

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  padding: 0;
  margin: 0;
}

</style>

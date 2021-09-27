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
          <nuxt-link to="">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Band">Band</nuxt-link>
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
.nuxt-link-active {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  white-space: nowrap;
}

.nuxt-link-active:hover {
  text-decoration: none;
  color: var(--c-brand);
}
</style>

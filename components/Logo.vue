<!--

This component is a simple logo. It uses nuxt-img-loader to load the image
and optimize it.

Author: sfinkel
Created: 2021/10/06 | 10:24 CET

-->
<template>
  <nuxt-img
    src="logo.svg"
    sizes="sm:80vw md:50vw lg:400px"
  />
</template>
<script>
export default {
  name: 'Logo'
}
</script>

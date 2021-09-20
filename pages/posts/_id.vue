<template>
  <div class="container">
    <article>
      <h1>
        {{ post.title }}
      </h1>
      <p>{{ post.content }}</p>
    </article>
    <aside>
      <h3>Posts you might enjoy</h3>
      <ul>
        <li v-for="related in relatedPosts" :key="related.id">
          <nuxt-link :to="{id: 'post-id', params: {id: related.id}}">
            {{ related.id }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          name: 'twitter:title',
          content: this.post.title
        },
        {
          name: 'twitter:description',
          content: this.post.content
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/UYP2umJ.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
  computed: {
    post () {
      return this.$store.state.posts.all.find(post => post.id === this.id)
    },
    relatedPosts () {
      return this.$store.state.posts.all.filter(post => post.id !== this.id)
    }
  }
}
</script>

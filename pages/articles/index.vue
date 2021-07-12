<template>
  <div>
    Articles:
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="article.path" class="hover:underline">{{
        article.slug
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  async asyncData({ $content, params }) {
    const articles = await $content('articles').fetch()
    return { articles }
  },
}
</script>

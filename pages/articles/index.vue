<template>
  <div>
    <div class="bg-header">
      <rs-back-button></rs-back-button>
      <!-- heading -->
      <rs-title>Articles</rs-title>
    </div>
    <article-list :articles="articles" />
    <client-only>
      <infinite-loading
        spinner="wavedots"
        :distance="0"
        @infinite="infiniteHandler"
      >
        <div slot="no-more" class="my-10 text-sm text-gray-600 select-none">
          that's all for now. : )
        </div>
        <div slot="no-results">Sorry, no posts yet :(</div>
        <div slot="error" slot-scope="{ trigger }">
          Some error occured. click
          <a
            href="javascript:;"
            class="text-primary-500 hover:text-primary-600/90"
            @click="trigger"
            >here</a
          >
          to retry
        </div>
      </infinite-loading>
    </client-only>
    <!-- Articles:
    <div v-for="article in articles" :key="article.slug">
      <nuxt-link :to="article.path" class="hover:underline">{{
        article.slug
      }}</nuxt-link>
    </div> -->
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Blogs',
  components: {
    InfiniteLoading,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .without(['body'])
      .sortBy('createdAt', 'asc')
      .limit(3)
      .fetch()
    return { articles }
  },
  methods: {
    async infiniteHandler($state) {
      try {
        const articles = await this.$content('articles')
          .without(['body'])
          .sortBy('createdAt', 'asc')
          .skip(this.articles.length)
          .limit(3)
          .fetch()

        if (articles.length) {
          this.articles.push(...articles)
          $state.loaded()
        }

        // if it is less than current limit (3)
        if (articles.length < 3) {
          $state.complete()
        }
      } catch (error) {
        $state.error()
      }
    },
  },
}
</script>

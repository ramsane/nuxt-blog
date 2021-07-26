<template>
  <div>
    <div class="bg-content">
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
          <span v-if="$nuxt.isOnline">
            Some error occured. click
            <a
              href="javascript:;"
              class="text-primary-500 hover:text-primary-600/90"
              @click="trigger"
            >
              here
            </a>
            to retry
          </span>
          <span v-else>
            You went offline. Please reconnect and then
            <a
              href="javascript:;"
              class="text-primary-500 hover:text-primary-600/90"
              @click="trigger"
            >
              try again
            </a>
          </span>
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
    // get the tags
    const tagsList = await $content('tags').fetch()
    // display the article tags
    const tags = Object.assign(
      {},
      ...tagsList.map((tag) => ({ [tag.slug]: tag }))
    )

    const articles = await $content('articles')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    // articles = articles.map((article) => ({
    //   ...article,
    //   tags: article.tags.map((tag) => tags[tag]),
    // }))

    return { articles, tags }
  },
  methods: {
    async infiniteHandler($state) {
      try {
        const articles = await this.$content('articles')
          .without(['body'])
          .sortBy('createdAt', 'desc')
          .skip(this.articles.length)
          .limit(3)
          .fetch()
        if (articles.length) {
          this.articles.push(...articles)
        }
        $state.loaded()
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

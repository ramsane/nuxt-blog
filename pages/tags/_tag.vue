<template>
  <div class="bg-header">
    <rs-back-button></rs-back-button>
    <!-- heading -->
    <rs-title>{{
      $route.params.tag
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }}</rs-title>
    <article-list :articles="articles"></article-list>
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
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Tags',
  components: {
    InfiniteLoading,
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ tags: { $contains: params.tag } })
      .without('body')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return {
      articles,
    }
  },
  methods: {
    async infiniteHandler($state) {
      try {
        const articles = await this.$content('articles')
          .where({ tags: { $contains: this.$route.params.tag } })
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

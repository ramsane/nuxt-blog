<template>
<!-- bg-content -->
  <article class="font-roboto bg-content">
    <client-only>
      <read-progress class="sticky top-0 left-0 z-[9999] w-full h-1" />
    </client-only>
    <!-- back -->
    <rs-back-button class="sticky top-0 z-10"></rs-back-button>
    <!-- title, excerpt and image -->
    <div class="max-w-screen-xl p-4 mx-auto">
      <div class="items-center lg:flex lg:space-x-4">
        <!-- text  -->
        <div
          class="max-w-screen-md mx-auto lg:max-w-md lg:mr-4 animate-fadeInFromBottom lg:animate-fadeInFromLeft"
        >
          <!-- date - category -->
          <div class="text-sm font-medium text-secondary">
            <span>{{ formatDate(article.createdAt) }}</span>
            <span class="inline-block px-2">—</span>
            <nuxt-link
              class="font-novaround text-primary-600 hover:text-red-700"
              :to="'/categories/' + article.category.toLowerCase()"
            >
              {{
                article.category
                  .split('-')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')
              }}
            </nuxt-link>
          </div>
          <!-- title -->
          <div
            class="text-3xl leading-tight font-novaflat lg:text-4xl"
          >
            {{ article.title }}
          </div>
          <!-- excerpt -->
          <div class="my-4 text-sm text-excerpt lg:text-base">
            {{ article.description }}
          </div>
        </div>

        <!-- image -->
        <div class="mx-auto lg:w-1/2">
          <nuxt-img
            :src="article.image"
            :alt="article.title"
            preset="post"
            class="object-cover w-full h-full rounded-md shadow-xl animate-fadeInFromBottom lg:animate-fadeInFromRight"
          />
        </div>
      </div>
    </div>

    <!-- content and tags -->
    <div
      class="max-w-screen-xl p-4 pt-8 mx-auto animate-fadeInFromBottom lg:animate-fadeInFromTop"
    >
      <nuxt-content :document="article" />
      <!-- tags -->
      <div class="max-w-screen-md mx-auto mt-8 space-x-2 text-sm select-none">
        <span v-for="tag in article.tags" :key="tag">
          <nuxt-link
            :to="'/tags/' + tag"
            class="inline-block px-2 text-primary-500 hover:text-primary-600 active:text-primary-500 focus:text-primary-500"
          >
            # {{ tag.replace(/-/g, ' ') }}
          </nuxt-link>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import mediumZoom from 'medium-zoom'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Ramana Reddy Sane' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ramsane.github.io/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      }
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    // when we revisit the page, we need to register it
    mediumZoom('.nuxt-content img:not(.medium-zoom-image)', {
      background: '#00000088',
      margin: 48,
    })
  },
  updated() {
    // register everytime we refresh the page..
    mediumZoom('.nuxt-content img:not(.medium-zoom-image)', {
      background: '#00000088',
      margin: 48,
    })
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
@import url('../../assets/css/nuxt-content.css');
</style>

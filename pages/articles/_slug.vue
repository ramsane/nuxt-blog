<template>
  <article class="text-default bg-content">
    <client-only>
      <read-progress class="sticky top-0 left-0 z-[9999] w-full h-1" />
    </client-only>
    <!-- back -->
    <rs-back-button class="sticky top-0 z-10"></rs-back-button>
    <!-- title, excerpt and image -->
    <div class="max-w-screen-xl p-4 mx-auto font-roboto">
      <div class="items-center lg:flex lg:space-x-4">
        <!-- text  -->
        <div
          class="max-w-screen-md mx-auto  lg:max-w-md lg:mr-4 animate-fadeInFromBottom lg:animate-fadeInFromLeft"
        >
          <!-- date - category -->
          <div class="text-sm font-medium font-roboto text-secondary">
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
            class="text-3xl leading-tight opacity-0  font-novaflat lg:text-4xl animate-fadeIn"
          >
            {{ article.title }}
          </div>
          <!-- excerpt -->
          <div class="my-4 text-sm font-roboto text-excerpt lg:text-base">
            {{ article.description }}
          </div>
        </div>

        <!-- image -->
        <div class="mx-auto lg:w-1/2">
          <nuxt-img
            :src="article.image"
            :alt="article.title"
            preset="post"
            class="object-cover w-full h-full rounded-md shadow-xl  animate-fadeInFromBottom lg:animate-fadeInFromRight"
          />
        </div>
      </div>
    </div>

    <!-- content and tags -->
    <div
      class="max-w-screen-xl p-4 pt-8 mx-auto  animate-fadeInFromBottom lg:animate-fadeInFromTop"
    >
      <nuxt-content :document="article" />
      <!-- tags -->
      <div class="max-w-screen-md mx-auto mt-8 space-x-2 text-sm select-none">
        <span v-for="tag in article.tags" :key="tag">
          <nuxt-link
            :to="'/tags/' + tag"
            class="inline-block px-2  text-primary-500 hover:text-primary-600 active:text-primary-500 focus:text-primary-500"
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

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
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

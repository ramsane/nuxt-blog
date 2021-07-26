<template>
  <div>
    <!-- Header -->
    <div class="w-full bg-dark">
      <div
        class="items-center mx-auto space-y-2 md:flex-row-reverse lg:pb-32 md:flex lg:max-w-screen-lg"
      >
        <!-- animate-fadeIn-from-Right -->
        <app-avatar
          class="w-full max-w-md mx-auto lg:max-w-lg animate-fadeInFromRight"
        />
        <app-typed-intro
          class="w-full h-16 max-w-md mx-auto text-center text-gray-300"
        />
      </div>
    </div>

    <!-- latest articles -->
    <div class="max-w-screen-xl mx-auto bg-content lg:-mt-24 rounded-t-md">
      <!-- title with below border -->
      <rs-title>Latest Articles</rs-title>
      <!-- Article Card -->
      <article-list :articles="articles" :initial-delay="200" />
      <!-- all articles link -->

      <div class="my-4 text-xl text-center font-novaround">
        <nuxt-link
          to="/articles/"
          class="inline-block p-2 m-3 transition duration-200 text-primary-500 active:text-primary-600 rounded-t-md border-primary-500 active:bg-gray-100 dark:active:bg-gray-800 active:shadow-inner"
        >
          see all articles
        </nuxt-link>
      </div>
    </div>
    <!-- 
    <h1>Main Page</h1>
    List of blogs :
    <nuxt-link to="articles" class="hover:underline"> All articles </nuxt-link>
    <div v-for="i in 10" :key="i" class="my-4">Line</div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return {
      articles,
    }
  },
}
</script>

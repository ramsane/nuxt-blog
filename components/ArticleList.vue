<template>
  <div
    class="grid justify-around max-w-screen-xl grid-cols-1 mx-auto mt-2 duration-200 md:grid-cols-2 lg:grid-cols-3"
  >
    <!-- <div v-for="i in 2" :key="i">
    </div> -->
    <div
      v-for="article in articles"
      :key="article.id"
      class="flex flex-col max-w-sm p-4 m-2 mx-auto transition-all duration-200 animate-fadeInFromBottom bg-card group hover:shadow-md active:shadow-xs"
    >
      <!-- category title -->
      <div class="pl-1 text-xl text-gray-500 font-novaround">
        <nuxt-link
          class="inline-block transition duration-200 border-above hover:text-primary-500/100 focus:text-primary-500/100"
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

      <!-- blog image -->
      <nuxt-link
        :to="article.path"
        class="block transition-all duration-200 shadow-xs group-hover:shadow-xl focus:shadow-xl"
      >
        <nuxt-img
          preset="post"
          :src="article.image"
          class="object-cover w-full h-full mt-2 rounded-t-md"
        />
      </nuxt-link>

      <!-- title, date and author -->
      <nuxt-link
        :to="article.path"
        class="block mt-4 text-2xl leading-7 text-default font-novaflat hover:text-primary-500/100 focus:text-primary-500/100"
      >
        {{ article.title }}
      </nuxt-link>
      <div class="text-xs font-roboto text-secondary">
        on
        <span class="font-semibold">{{ formatDate(article.createdAt) }} </span>
        by
        <span class="font-semibold">{{ article.author }}</span>
      </div>

      <!-- excerpt -->
      <div class="flex-1 my-4 text-sm leading-relaxed font-roboto text-excerpt">
        {{ article.description }}
      </div>

      <!-- tags -->
      <div
        class="mt-4 space-x-2 text-sm select-none font-roboto text-secondary"
      >
        <span v-for="tag in article.tags" :key="tag">
          <nuxt-link
            :to="'/tags/' + tag"
            class="inline-block px-2 hover:text-primary-500 active:text-primary-500 focus:text-primary-500"
          >
            # {{ tag.replace(/-/g, ' ') }}
          </nuxt-link>
        </span>
      </div>

      <!-- {{ index }} - {{ article }} -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 6,
    },
    baseDelay: {
      type: Number,
      default: 70,
    },
    initialDelay: {
      type: Number,
      default: 100,
    },
  },

  methods: {
    animationDelay(index) {
      // delay should start from
      return `${this.initialDelay + (index % this.perPage) * this.baseDelay}ms`
      // return "100ms";
    },
    formatDate(date) {
      const D = new Date(date).toString().split(' ')
      return D[2] + ' ' + D[1] + ' ' + D[3]
    },
  },
}
</script>

<template>
  <div
    class="
      flex flex-col
      transition-all
      duration-200
      bg-card
      group
      hover:shadow-md
      active:shadow-xs
    "
  >
    <!-- category title -->
    <div class="pl-1 text-xl text-gray-500 font-novaround">
      <g-link
        class="
          inline-block
          transition
          duration-200
          border-above
          hover:text-primary-500
          focus:text-primary-500
        "
        :to="article.category.path"
      >
        {{ article.category.title }}
      </g-link>
    </div>
    <!-- blog image -->
    <g-link
      :to="article.path"
      class="
        block
        transition-all
        duration-200
        shadow-xs
        group-hover:shadow-xl
        focus:shadow-xl
      "
    >
      <g-image
        :src="article.image"
        class="object-cover w-full h-full mt-2 rounded-t-md"
      />
    </g-link>
    <!-- title, date and author -->
    <g-link
      :to="article.path"
      class="
        block
        mt-4
        text-2xl
        leading-7
        text-default
        font-novaflat
        hover:text-primary-500
        focus:text-primary-500
      "
    >
      {{ article.title }}
    </g-link>
    <div class="text-xs font-roboto text-secondary">
      on <span class="font-semibold">{{ article.date }} </span> by
      <span class="font-semibold">{{ article.author.title }}</span>
    </div>
    <!-- excerpt -->
    <div class="flex-1 text-sm excerpt">{{ article.excerpt }}</div>
    <!-- tags -->
    <div class="mt-4 text-sm select-none font-roboto text-secondary">
      <span v-for="tag in article.tags" :key="tag.id" class="tag">
        <g-link
          :to="tag.path"
          class="
            inline-block
            px-2
            hover:text-primary-500
            active:text-primary-500
            focus:text-primary-500
          "
        >
          # {{ tag.title }}
        </g-link>
        <!-- <span class="text-gray-500 saperator">&#x25CF;</span> -->
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
}
</script>

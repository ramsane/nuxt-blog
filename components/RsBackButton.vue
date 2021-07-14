<template>
  <div class="max-w-screen-xl p-4 mx-auto font-roboto">
    <a
      class="inline-block my-2 ml-1 font-medium tracking-wide transition-all duration-100  group text-excerpt hover:tracking-wider hover:cursor-pointer"
      @click="$router.go(-1)"
    >
      <span
        class="
          inline-block
          -mr-[0.5px]
          transition-all
          duration-200
          ease-linear
          transform
          group-hover:-translate-x-1
        "
        >◀</span
      >
      Back
    </a>
  </div>
</template>

<template>
  <!-- body and header -->
  <div>
    <div :class="theme">
      <div
        class="relative flex flex-col min-h-screen transition-transform duration-300  text-default lg:translate-x-0"
        :class="{
          '-translate-x-2/3 transform sm:-translate-x-1/3': menuClicked,
        }"
      >
        <!-- header -->
        <div :class="[bgColor, textColor]">
          <header
            class="flex items-center justify-between px-4 py-2  lg:max-w-screen-xl lg:mx-auto"
          >
            <!-- link to home page with logo -->
            <nuxt-link to="/" aria-label="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 fill-current text-primary-500"
              >
                <path
                  d="M22.2977 32.5146V40L20 38.874 17.7023 40v-7.4854c-2.4915-.8153-4.8299-1.9092-7.0152-3.2819L4.0901 40h-.21989L0 37.9119l6.97078-11.4214c-3.84089-3.371-5.76134-7.1865-5.76134-11.4465 0-4.1761 1.25342-7.6897 3.76026-10.54086C7.03674 2.15514 9.51426.654087 12.4022 0h.2199l5.0357 2.74214c-4.0462.9392-7.0367 2.39833-8.97182 4.37735C6.42836 9.4675 5.29955 12.1174 5.29955 15.0692c0 3.371 1.10681 6.2892 3.32046 8.7547l2.77069-4.5535h.2199l3.8702 2.1133-3.3644 5.5094c1.8415 1.3612 3.7034 2.3937 5.5859 3.0972l-.0445-27.24816V0L20 1.019 22.3422 0v2.74214l-.0445 27.24816c1.8825-.7035 3.7444-1.736 5.5859-3.0972l-3.3644-5.5094 3.8702-2.1133h.2199l2.7706 4.5535c2.2137-2.4655 3.3205-5.3837 3.3205-8.7547 0-2.9518-1.1288-5.6017-3.3864-7.94971-1.9351-1.97902-4.9258-3.43815-8.9718-4.37735L27.3778 0h.22c2.888.654087 5.3655 2.15514 7.4325 4.50314 2.5068 2.85116 3.7603 6.36476 3.7603 10.54086 0 4.26-1.9205 8.0755-5.7614 11.4465L40 37.9119 36.1298 40h-.2199l-6.597-10.7673c-2.1853 1.3727-4.5237 2.4666-7.0152 3.2819z"
                />
              </svg>
            </nuxt-link>
            <nav class="justify-end hidden lg:flex">
              <rs-theme-switcher
                class="self-center ml-auto"
                :theme="theme"
                @themeChanged="updateTheme"
              />
              <nuxt-link
                v-for="category in categories"
                :key="category.name"
                :to="category.path"
                class="mx-5 text-xl tracking-wide  hover:text-primary-500 font-roboto"
                exact-active-class="text-primary-500"
              >
                {{ category.name }}
              </nuxt-link>
            </nav>
            <!-- hamberger menu -->
            <svg
              class="w-12 h-10 text-gray-500 cursor-pointer stroke-current stroke-2  lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              @click="menuClicked = !menuClicked"
            >
              <path d="M5 20h40M5 30h40M5 10h40" />
            </svg>
          </header>
        </div>

        <!-- content -->
        <div class="flex-1 bg-page">
          <Nuxt />
        </div>

        <!-- footer -->
        <div class="w-full bg-card text-default">
          <div
            class="flex flex-col items-center justify-between max-w-screen-lg px-4 py-8 mx-auto space-y-6  md:flex-row md:space-y-0"
          >
            <!-- copy rights -->
            <div>
              &copy;2021 designed and coded by
              <a
                class="text-primary-500"
                href="https://www.linkedin.com/in/ramanareddysane/"
                target="_blank"
                rel="noopener"
              >
                Ramana Reddy</a
              >
              <!-- using Nuxt-content -->
            </div>
            <!-- social contacts -->
            <div class="flex space-x-3">
              <a
                href="https://github.com/ramsane"
                target="_blank"
                rel="noopener"
                class="h-full p-2 rounded-full fill-current bg-gray-200/70"
                aria-label="Github"
              >
                <svg-icon
                  name="github"
                  class="w-6 h-6 text-gray-600 fill-current hover:text-gray-700"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ramanareddysane/"
                target="_blank"
                class="h-full p-2 bg-blue-700 rounded-full fill-current"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg-icon
                  name="linkedin"
                  class="w-6 h-6 text-blue-100 fill-current hover:text-blue-50"
                />
              </a>
              <a
                href="mailto:ramsane20@gmail.com"
                rel="noopener"
                class="h-full p-2 bg-red-700 rounded-full fill-current"
                aria-label="Mail"
              >
                <svg-icon
                  name="mail"
                  class="w-6 h-6 text-red-100 fill-current  stroke-3 hover:text-red-50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- side nav -->
      <nav
        class="fixed top-0 right-0 w-2/3 h-full text-xl text-gray-500 transition-transform duration-300 transform  sm:w-1/3 lg:translate-x-full"
        :class="[{ 'translate-x-full': !menuClicked }, bgColor]"
      >
        <rs-theme-switcher
          class="block w-3/4 p-4 mx-auto"
          :theme="theme"
          @themeChanged="updateTheme"
        />
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex-col p-4"
        >
          <nuxt-link
            :to="category.path"
            class="block w-3/4 mx-auto tracking-wide  hover:text-primary-500 font-roboto"
            active-class="text-primary-500"
          >
            {{ category.name }}
          </nuxt-link>
        </div>
      </nav>
    </div>
    <!-- <div>
      adfasdadsfdsf
      <Nuxt />
    </div> -->
  </div>
</template>

<script>
// svgs
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
export default {
  components: {
    'rs-theme-switcher': ThemeSwitcher,
  },
  layout: 'default',
  data() {
    return {
      menuClicked: false,
      categories: [
        {
          name: 'Articles',
          path: '/articles',
        },
      ],
      theme: '',
    }
  },
  computed: {
    home() {
      return this.$route.fullPath === '/'
    },
    bgColor() {
      return this.home ? 'bg-dark' : 'bg-header'
    },
    textColor() {
      return this.home ? 'text-gray-300' : 'text-default'
    },
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  methods: {
    updateTheme(newTheme) {
      this.theme = newTheme
    },
  },
}
</script>

vbase

<style>
/* a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
} */
</style>

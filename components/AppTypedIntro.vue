<template>
  <div
    id="aboutme"
    class="text-lg is-typing font-novasquare md:text-xl lg:text-3xl"
  ></div>
</template>

<script>
export default {
  mounted() {
    const theater = require('theaterjs/dist/theater.min.js')({
      minSpeed: 20,
      maxSpeed: 450,
    })
    theater
      .on('type:start, erase:start', function () {
        // add a class to actor's dom element when he starts typing/erasing
        // theater.getCurrentActor().$element.classList.add("is-typing");
      })
      .on('type:end, erase:end', function () {
        // and then remove it when he's done
        // theater.getCurrentActor().$element.classList.remove("is-typing");
      })

    theater
      .addActor('aboutme', { accuracy: 1, speed: 0.75 })
      .addScene(1000, 'aboutme:', 1000, 'Hi!', 500, ' I`m', 750, -2, "'m ")
      .addScene('<span class="text-primary-500">Ramana Reddy,</span>')
      .addScene(500, '<br>an adept at ')
      .addScene('<span class="text-[#F19537]">Machine Learning.</span>')
      .addScene(1000, -17)
      .addScene('<span class="text-[#FF8000]">Computer Vision.</span>')
      .addScene(1000, -16)
      .addScene(
        '<span class="text-[#FF8000]">Natural Language Processing.</span>'
      )
      .addScene(1000, -40)
      .addScene(
        'a decent <span class="text-[#0C4B33]">Software Developer.</span>'
      )
      .addScene(1000, -19)
      .addScene('<span class="text-[#41B883]">Front-end developer</span>')
      .addScene(1000, 'aboutme:', theater.replay)
  },
}
</script>

<style scoped>
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.is-typing::after {
  content: '|';
  opacity: 0;
  animation: blink 500ms infinite 1s;
}
</style>

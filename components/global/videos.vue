<template>
  <client-only>
    <lite-youtube
      :videoid="id"
      :playlabel="label"
      params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
    />
  </client-only>
</template>

<script>
export default {
  name: 'LiteYoutubeEmbed',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

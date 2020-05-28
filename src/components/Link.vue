<template lang="pug">
  div(
    v-on:mousedown.native="event => event.preventDefault()"
    :is="external ? 'a' : 'router-link'"
    :href="url" 
    :to="url"
    :current="new RegExp(regex || url).test($route.fullPath)"
  )
    slot
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: true,
      },

      external: {
        type: Boolean,
        default: false,
      },

      regex: {
        type: String,
      },
    },
  }
</script>

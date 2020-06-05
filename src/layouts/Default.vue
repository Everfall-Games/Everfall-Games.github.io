<template lang="pug">
  main
    Navigation
    router-view.view
    //- Footer
</template>

<style lang="sass" scoped>
  main
    min-height: 100%

  .view
    width: 100%
</style>

<script>
  import Navigation from '@/components/Navigation'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Navigation,
      Footer,
    },
  }
</script>

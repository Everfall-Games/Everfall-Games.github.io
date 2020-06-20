<template lang="pug">
  Scroller#lb-2( :paths="[ '/lb-2', '/lb-2/#no-jumpscares', '/lb-2/#amazing-features' ]" )
    Slide1
    Slide2
    Slide3
</template>

<script>
  import Slide1 from '@/components/slides/LB-2/1'
  import Slide2 from '@/components/slides/LB-2/2'
  import Slide3 from '@/components/slides/LB-2/3'
  import Scroller from '@/components/Scroller'

  export default {
    components: {
      Scroller,
      Slide1,
      Slide2,
      Slide3,
    },
  }
</script>

<style lang="sass">
  #lb-2
    @media (min-width: 1400px), (min-height: 900px)
      h1
        font-size: 70px
        margin-bottom: -10px
</style>

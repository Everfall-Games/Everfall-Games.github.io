<template lang="pug">
  Scroller#lb-2( :paths="[ '/lb-2', '/lb-2/#no-jumpscares', '/lb-2/#amazing-features', '/lb-2/#roadmap' ]" )
    Slide1
    Slide2
    Slide3
    Slide4
</template>

<script>
  import Slide1 from '@/components/slides/LB-2/1'
  import Slide2 from '@/components/slides/LB-2/2'
  import Slide3 from '@/components/slides/LB-2/3'
  import Slide4 from '@/components/slides/LB-2/4'
  import Scroller from '@/components/Scroller'

  export default {
    components: {
      Scroller,
      Slide1,
      Slide2,
      Slide3,
      Slide4,
    },
  }
</script>

<style lang="sass">
  #lb-2
    @media (min-width: 1400px), (min-height: 900px)
      h1
        font-size: 70px
        margin-bottom: -10px

    @media (max-width: 1400px), (max-height: 900px)
      min-height: 550px

      h1
        font-size: 80px
        margin-bottom: -18px

      p
        font-size: 17px
        margin-top: 40px
        line-height: 40px
        max-width: 700px

      h3
        font-size: 30px
        margin-bottom: 5px
        letter-spacing: 6px

    @media (max-width: 900px), (max-height: 800px)
      h1
        font-size: 60px
        margin-bottom: -10px

      p
        line-height: 30px
        font-size: 16px
        max-width: 600px

      h3
        font-size: 25px
        margin-bottom: 2px
        letter-spacing: 4px

    @media (max-width: 700px), (max-height: 700px)
      h1
        font-size: 50px
        margin-bottom: -10px

      h3
        font-size: 20px
        margin-bottom: 2px
        letter-spacing: 3px

    @media (max-width: 500px), (max-height: 500px)
      h1
        font-size: 30px

      p
        font-size: 14px
        margin-top: 25px

    @media (max-width: 320px), (max-height: 600px)
      h1
        font-size: 25px
        line-height: 40px
</style>

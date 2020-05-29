<template lang="pug">
  section.slide#about
    .background
      video( 
        src="@/assets/backgrounds/about.mp4" 
        ref="backgroundVideo" 
        poster="@/assets/backgrounds/about.webp"
        muted 
        autoplay 
        loop 
      )

    Dots( :mask="mask" )

    .content
      h1 Memorable
      h1.outline Experiences
      p We want to become a main distributor of single-player, AAA quality games and with the launch of LB-2 we hope to gain valuable experience to help us transition to more ambitious projects.
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from './Dots'

  export default {
    components: {
      Icon,
      Dots,
    },

    methods: {
      mask (canvas, context) {
        const gradient = context.createLinearGradient(0, 0, canvas.width, -canvas.height / 2)

        gradient.addColorStop(0, 'white')
        gradient.addColorStop(0.5, 'transparent')

        context.fillStyle = gradient
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = 'white'
      },
    },

    mounted () {
      this.$refs.backgroundVideo.play()
    },
  }
</script>

<style lang="sass" scoped>
  @import slide

  .content
    padding: 0 60px
    text-align: left
    margin-left: auto

  .background > video
    opacity: 0.7

  .symbol
    height: 40px
    margin-top: -40px
    margin-bottom: 20px
    fill: white

  .bar
    width: 100%
    max-width: 700px
    height: 10px
    background-color: var(--border)
    position: absolute
    bottom: 0

  .learn-more
    display: inline-block
    text-decoration: none
    text-transform: uppercase
    font-weight: 600
    letter-spacing: 2px
    margin-top: 40px
    transition: color 0.05s

    // .inner
    //   clip-path: inset(0 0 0 0%)
    //   pointer-events: none
    //   transition: clip-path 0.5s

    // .hover
    //   position: absolute
    //   top: 0
    //   left: 0
    //   color: var(--border)
    //   clip-path: inset(0 100% 0 0)
    //   pointer-events: none
    //   transition: clip-path 0.5s

    // &:hover
    //   .inner
    //     clip-path: inset(0 0 0 100%)

    //   .hover
    //     clip-path: inset(0 0% 0 0)

  @media (max-width: 1400px), (max-height: 900px)
    .bar
      max-width: 600px

  @media (max-width: 900px), (max-height: 800px)
    .bar
      max-width: 500px
      height: 6px

    .symbol
      height: 30px
      margin-bottom: 10px
</style>

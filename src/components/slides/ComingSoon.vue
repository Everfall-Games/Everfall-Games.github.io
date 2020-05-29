<template lang="pug">
  section.slide#coming-soon
    .background
      video( 
        src="@/assets/backgrounds/coming-soon.mp4" 
        ref="backgroundVideo" 
        poster="@/assets/backgrounds/coming-soon.webp"
        muted 
        autoplay 
        loop 
      )

    .background.lim

    .background.bo

    Dots( :mask="mask" )

    .content
      h3 Limbo
      h1.outline Coming
      h1 Soon

    .bar
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
        const gradient = context.createLinearGradient(0, 0, canvas.width, -canvas.height)

        gradient.addColorStop(0, 'white')
        gradient.addColorStop(0.2, 'transparent')
        gradient.addColorStop(0.5, 'transparent')
        gradient.addColorStop(1, 'white')

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

  .lim, .bo
    background-image: url(~!!file-loader!assets/backgrounds/lim.svg)
    width: 100vw
    height: 100vh
    background-repeat: no-repeat
    background-position: right 80%
    background-size: 75vmin
    opacity: 0.05

  .bo
    background-image: url(~!!file-loader!assets/backgrounds/bo.svg)
    background-position: -80vmin 35%
    background-size: 150vmin

  .slide
    align-items: center

  .content
    padding: 0 60px
    text-align: center

  .background > video
    opacity: 0.4

  .symbol
    height: 40px
    margin-top: -40px
    margin-bottom: 20px
    fill: white

  .bar
    width: 100%
    max-width: 700px
    height: 10px
    background-color: var(--text)
    position: absolute
    bottom: 0

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

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

    Dots( :mask="mask" )

    .background.lim

    .background.bo

    .content
      h3 Limbo
      h1.outline Coming
      h1 Soon

    .bar
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from '../Dots'

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
  @import ../slide

  @keyframes slideIn
    0%
      transform: translateY(50vh)

    100%
      transform: translateY(0)

  .content, .p, .social, h1, .bar
    // animation: slideIn 1s ease-out

  .lim, .bo
    background-image: url(~!!file-loader!assets/backgrounds/lim.svg)
    width: 100vw
    height: 100vh
    background-repeat: no-repeat
    background-position: right 80%
    background-size: 75vmin
    opacity: 0.05

  .slide
    .lim, .bo
      position: fixed

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

  .bar
    @media (max-width: 1400px), (max-height: 900px)
      max-width: 600px

    @media (max-width: 900px), (max-height: 800px)
      max-width: 500px
      height: 6px

  .content
    @media (max-width: 700px), (max-height: 700px)
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

    @media (max-width: 500px), (max-height: 600px)
      h1
        font-size: 50px
        line-height: 80px

      p
        font-size: 14px
        margin-top: 25px

      h3
        font-size: 20px
        margin-bottom: 0px
        letter-spacing: 6px

    @media (max-width: 320px), (max-height: 600px)
      h1
        font-size: 25px
</style>

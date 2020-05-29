<template lang="pug">
  section.slide#coming-soon
    .background
      video( src="@/assets/backgrounds/coming-soon.mp4" ref="backgroundVideo" muted autoplay loop )

    Dots( :mask="mask" )

    .content
      h3 Limbo
      h1.outline Coming
      h1 Soon
    
      //- a.learn-more( href="#" ) Learn More
        //- .inner Learn More
        //- .hover Learn More

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

    data () {
      return {
        canvas: null,
        context: null,
        gradients: false,
      }
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
      // this.canvas = document.createElement('canvas')
      // this.context = this.canvas.getContext('2d')

      // const context = this

      // window.addEventListener('resize', () => {
      //   context.gradients = false
      // })

      this.$refs.backgroundVideo.play()
    },
  }
</script>

<style lang="sass" scoped>
  @import slide

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

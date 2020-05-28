<template lang="pug">
  section.slide.landing#lb-2
    .background
      video( src="@/assets/backgrounds/lb2.mp4" autostart loop )

    Dots( :mask="mask" )

    .content
      h1 Immersive
      h1.outline Horror
      p LB-2 is an open-world, Sci-fi horror game, which focuses on player vs AI gameplay. Taking inspiration from the likes of Alien: Isolation, it operates as a game of 'cat and mouse' as the player attempts to evade and outsmart a trio of demonic creatures in an underground lab facility.
    
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
      }
    },

    methods: {
      mask (canvas, context) {
        if (!this.canvas) return

        const gradientCanvas = this.canvas
        const gradientContext = this.context

        gradientCanvas.width = canvas.width / 2
        gradientCanvas.height = canvas.height / 2

        gradientContext.clearRect(0, 0, canvas.width, canvas.height)

        const R = 50

        const X1 = 0
        const Y1 = 0

        const X2 = gradientCanvas.width - R * 4
        const Y2 = gradientCanvas.height - (gradientCanvas.height / 6) - R * 4

        const gradient = (x, y) => {
          const gradient = context.createRadialGradient(x + R * 2, y + R * 2, 0, x + R * 2, y + R * 2, R * 2)
          gradient.addColorStop(1, 'transparent')
          gradient.addColorStop(0, 'white')

          return gradient
        }

        gradientContext.fillStyle = gradient(X1, Y1)
        gradientContext.fillRect(X1, Y1, R * 4, R * 4)

        gradientContext.fillStyle = gradient(X2, Y2)
        gradientContext.fillRect(X2, Y2, R * 4, R * 4)

        context.drawImage(gradientCanvas, 0, 0, canvas.width, canvas.height)
      },
    },

    mounted () {
      this.canvas = document.createElement('canvas')
      this.context = this.canvas.getContext('2d')
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

  .bar
    width: 100%
    max-width: 700px
    height: 10px
    background-color: var(--border)
    position: absolute
    bottom: 0

  @media (max-width: 1400px)
    .bar
      max-width: 600px

  @media (max-width: 900px)
    .bar
      max-width: 500px
</style>

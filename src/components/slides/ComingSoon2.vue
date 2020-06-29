<template lang="pug">
  section.slide#limbo
    .background
      video( 
        src="@/assets/backgrounds/limbo.mp4" 
        ref="backgroundVideo" 
        muted 
        autoplay 
        loop 
      )
      //- poster="@/assets/backgrounds/limbo.webp"
      //- img( src="@/assets/backgrounds/limbo.webp" )

    Dots( :mask="mask" )

    .background.lim

    .background.bo

    .content( fade-in  )
      h3 Limbo
      h1.outline A game about
      h1 Moral grey areas
      span Coming Soon

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
        if (!this.canvas) return

        const gradientCanvas = this.canvas
        const gradientContext = this.context

        if (!this.gradients) {
          gradientCanvas.width = canvas.width / 2
          gradientCanvas.height = canvas.height / 2

          gradientContext.clearRect(0, 0, canvas.width, canvas.height)

          const R = 80

          const X1 = -40
          const Y1 = gradientCanvas.height - R * 4

          const X2 = gradientCanvas.width - R * 4
          const Y2 = -50

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

          this.gradients = true
        }

        context.drawImage(gradientCanvas, 0, 0, canvas.width, canvas.height)
      },

      resize () {
        this.gradients = false
      },
    },

    mounted () {
      this.canvas = document.createElement('canvas')
      this.context = this.canvas.getContext('2d')

      window.addEventListener('resize', this.resize)

      this.$refs.backgroundVideo.play()
    },

    destroyed () {
      this.canvas.remove()
      window.removeEventListener('resize', this.resize)
    },
  }
</script>

<style lang="sass" scoped>
  @import slide

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

  .bo
    background-image: url(~!!file-loader!assets/backgrounds/bo.svg)
    background-position: -80vmin 35%
    background-size: 150vmin

  .slide
    align-items: center

  .content
    padding: 0 60px
    text-align: center

    span
      display: inline-block
      font-weight: 600
      letter-spacing: 2px
      margin-top: 120px
      text-transform: uppercase

  .background > video
    opacity: 0.5

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

    .content > span
      margin-top: 80px

  @media (max-width: 900px), (max-height: 800px)
    .bar
      max-width: 500px
      height: 6px

    .content > span
      margin-top: 60px
</style>

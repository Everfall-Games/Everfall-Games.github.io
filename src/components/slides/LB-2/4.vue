<template lang="pug">
  section.slide#roadmap
    .background
      video( 
        src="@/assets/backgrounds/lb2_roadmap.mp4" 
        ref="backgroundVideo" 
        muted 
        autoplay 
        loop 
      )

    //- poster="@/assets/backgrounds/lb2.webp"

    Dots( :mask="mask" v-show="gradients" )

    .content( fade-in  )
      //- Icon.symbol lb2
      h1 
        Icon.symbol lb2-symbol
        | LB-2 Roadmap

      .cards
        Card( date="3/20/2021" image="Stage_1_Crop.webp" stage="Stage 1" :list="['Hearing Device', 'Map Increase', 'Verticle Slice Demo']" )
        Card( date="3/20/2021" image="Stage_2_Crop.webp" stage="Stage 2" :list="['Monster Kill Animations', '3D Sound Engineer', 'New Map Area']" )
        Card( date="3/20/2021" image="Stage_3_Crop.webp" stage="Stage 3" :list="['Kickstarter Launch', 'Custom Merch', 'Gore Addition']" )
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from '../Dots'
  import Card from '../../LB-2Card'

  export default {
    components: {
      Icon,
      Dots,
      Card,
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

          const R = 55

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
  @import ../slide

  @keyframes slideIn
    0%
      transform: translateY(50vh)

    100%
      transform: translateY(0)

  .content, p, .social, h1, .bar, a
    // animation: slideIn 1s ease-out

  .slide
    align-items: center

  .content
    padding: 0 60px
    text-align: center
    display: flex
    flex-direction: column
    align-items: center

  .background > video
    opacity: 1

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

  .cards
    display: flex
    // flex-wrap: wrap

  h1 > .symbol
    width: 60px
    height: 100%
    margin-bottom: 0
    transform: translateY(20%)
    margin-right: 15px

    @media (max-width: 800px)
      transform: translateY(0)
      margin-right: 0
      display: block
      margin: 0 auto
      width: 40px
      margin-bottom: 20px

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

<template lang="pug">
  section.slide#no-jumpscares
    .background
      video( 
        src="@/assets/backgrounds/lb2_bgvid_2_compressed.mp4" 
        ref="backgroundVideo" 
        poster="@/assets/backgrounds/lb2-trailer-001.png"
        muted 
        autoplay 
        loop 
      )

    Dots( :mask="mask" v-show="gradients" )

    .content( fade-in  )
      //- Icon.symbol lb2
      h1 No jumpscares
      //- Edited Per Request
      //- h1 Just suspense.
      h1 Only suspense
      //- Edited Per Request
      //- p LB-2 is an open-world, Sci-fi horror game, which focuses on player vs AI gameplay. Taking inspiration from the likes of Alien: Isolation, it operates as a game of 'cat and mouse' as the player attempts to evade and outsmart a trio of demonic creatures in an underground lab facility.
      p Relying mostly on suspense and ambience, we still will employ use of QTEs for the release of tension, however our horror will stem from the expectation and feeling of something lurking and observing you, just out of sight.

      //- a.learn-more( href="#" ) Learn More
        //- .inner Learn More
        //- .hover Learn More

    //- .bar
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from '../Dots'

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
    align-items: flex-end

  .content
    padding: 0 60px
    text-align: right
    border-right: 10px solid transparent
    padding-right: 150px
    padding-left: 60px
    position: relative
    top: 10px
    display: flex
    flex-direction: column
    align-items: flex-end
      

  .background > video
    opacity: 0.6

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

  @media (min-width: 1400px), (min-height: 900px)
    h1
      &:first-child
        margin-top: -32px

    p
      margin-bottom: -10px

  @media (max-width: 1400px), (max-height: 900px)
    .content
      padding-right: 110px
    .bar
      max-width: 600px
    h1:first-child
      margin-top: -22px

  @media (max-width: 900px), (max-height: 800px)
    .content
      padding: 0 40px
      border-width: 6px

    .bar
      max-width: 500px
      height: 6px

    .symbol
      height: 30px
      margin-bottom: 10px
    h1:first-child
      margin-top: -18px

  @media (max-width: 700px), (max-height: 700px)
    h1:first-child
      margin-top: -10px
</style>

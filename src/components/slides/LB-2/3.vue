<template lang="pug">
  section.slide#amazing-features
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

    .content( fade-in  )
      //- Icon.symbol lb2
      h1 Packed with
      h1 Amazing features
      //- p LB-2 is an open-world, Sci-fi horror game, which focuses on player vs AI gameplay. Taking inspiration from the likes of Alien: Isolation, it operates as a game of 'cat and mouse' as the player attempts to evade and outsmart a trio of demonic creatures in an underground lab facility.
    
      .learn-more( href="#" ) 
        a( href="#" ) Check out our kickstarter

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
        const gradient = context.createLinearGradient(0, 0, canvas.width, -canvas.height)

        gradient.addColorStop(0, 'white')
        gradient.addColorStop(0.2, 'transparent')
        gradient.addColorStop(0.5, 'transparent')
        gradient.addColorStop(1, 'white')

        context.fillStyle = gradient
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = 'white'
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
    text-transform: uppercase
    font-weight: 400
    letter-spacing: 2px
    transition: color 0.05s
    background-image: url(~assets/backgrounds/blood2.webp)
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 200px
    margin: 0 auto
    width: 450px
    display: flex
    align-items: center
    justify-content: center
    padding-left: 20px
    padding-top: 10px
    font-size: 14px
    margin-bottom: -40px
    margin-top: 20px

    a
      text-decoration: none
      transition: color 0.1s

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

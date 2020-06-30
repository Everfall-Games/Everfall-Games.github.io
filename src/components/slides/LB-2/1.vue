<template lang="pug">
  section.slide
    .background
      video( 
        src="@/assets/backgrounds/monster2.mp4" 
        ref="backgroundVideo" 
        poster="@/assets/backgrounds/monster2.png"
        muted 
        autoplay 
        loop 
      )

    Dots( :mask="mask" )

    .content( fade-in )
      .heading
        h1 An immersive
        h1 Non-linear,
        h1 Horror experience

      p Experience true horror in LB-2 as your heart races each time you turn a corner. With complex AI agents and a dynamic, non-linear environment, you will experience horror like never before.

      .learn-more
        a( href="https://discord.gg/QQ3CPxK" ) Join the Discord
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

          const R = 60

          const X1 = 0
          const Y1 = gradientCanvas.height - R * 4

          const X2 = gradientCanvas.width - R * 5
          const Y2 = 20

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

  .learn-more
    text-transform: uppercase
    font-weight: 400
    letter-spacing: 2px
    transition: color 0.05s
    background-image: url(~assets/backgrounds/blood1.webp)
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    height: 110px
    margin-top: 20px
    width: 400px
    display: flex
    align-items: center
    justify-content: center
    padding-right: 55px

    a
      text-decoration: none
      transition: color 0.1s

  .background.octagons
    z-index: 1
    overflow: hidden

    > div
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transform: translateX(22vmin)

  .background.octagon
    background-image: url(~!!file-loader!assets/backgrounds/octagon.svg)
    width: 95vmin
    height: 95vmin
    background-size: contain
    z-index: 1
    background-repeat: no-repeat
    animation: spin 15s linear infinite
    background-position: center center
    right: 0vmin
    left: auto
    top: auto
    bottom: 0
    transform-origin: center

    &.reverse
      animation-direction: reverse
      animation-duration: 30s
      animation-delay: -5s
      // opacity: 0.5
      // transform: translateX(20vmin)
      // width: 98vmin
      // height: 98vmin

  @keyframes slideIn
    0%
      transform: translateX(-100%)

    100%
      transform: translateX(0)
      

  .content, p, .social, h1:not(.outline)
    // animation: slideIn 1s ease-out

  .slide
    .background
      opacity: 0.5

    .monster
      background-image: url(~assets/backgrounds/monster.webp)
      position: absolute
      bottom: 0
      right: 0
      width: 90%
      height: 95%
      background-size: contain
      background-position: bottom right
      background-repeat: no-repeat
      // filter: contrast(0.97) brightness(0.7)
      z-index: 1

    .content
      border-left: 10px solid transparent
      padding-left: 150px
      padding-right: 60px
      position: relative
      position: relative
      top: 10px
      display: flex
      flex-direction: column
      align-items: flex-start

    .social
      fill: white
      margin-left: 160px
      justify-self: flex-end
      margin-top: auto
      margin-bottom: 70px
      position: relative

      a
        cursor: pointer
        margin-right: 26px
        height: 30px
        display: inline-block
        padding: 2px
        margin-left: -2px

      svg
        height: inherit

    .heading
      position: relative
      display: flex
      flex-direction: column
      // animation: flicker 2.5s ease-in

    @media (min-width: 1400px), (min-height: 900px)
      h1
        &:first-child
          margin-top: -32px

      p
        margin-bottom: -10px

    @media (max-width: 1400px), (max-height: 900px)
      .content
        padding-left: 110px

      .social
        margin-left: 120px

      h1:first-child
          margin-top: -22px

    @media (max-width: 900px), (max-height: 800px)
      .content
        padding: 0 40px
        border-width: 6px

      .social
        margin-left: 45px

      h1:first-child
        margin-top: -18px

    @media (max-width: 700px), (max-height: 700px)
      h1:first-child
        margin-top: -10px
</style>

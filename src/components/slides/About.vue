<template lang="pug">
  section.slide#about
    .background.octagons( fade-in  )
      div
        .background.octagon
        .background.octagon.reverse

    .monster( fade-in  )

    Dots( :mask="mask" )

    .content( fade-in  )
      h1 Memorable
      h1.outline Experiences
      p We want to become a main distributor of single-player, AAA quality games and with the launch of LB-2 we hope to gain valuable experience to help us transition to more ambitious projects.

      .people
        div
          img( src="@/assets/ricardo.png" alt="Ricardo portrait" )
          div
            h5 Ricardo Valdes
            h6 Co-Founder
            
        div
          img( src="@/assets/pedro.png" alt="Ricardo portrait" )
          div
            h5 Pedro Civa
            h6 Co-Founder
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

  @keyframes slideIn
    0%
      transform: translateX(100%)

    100%
      transform: translateX(0)

  @keyframes spin
    0%
      transform: rotate(0deg)

    50%
      transform: rotate(180deg)

    100%
      transform: rotate(360deg)

  .background.octagons
    z-index: 1
    overflow: hidden

    > div
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transform: translateX(-5vmin) translateY(35vmin)

  .background.octagon
    background-image: url(~!!file-loader!assets/backgrounds/octagon.svg)
    width: 80vmin
    height: 80vmin
    background-size: contain
    z-index: 1
    background-repeat: no-repeat
    animation: spin 15s linear infinite
    background-position: center center
    left: 0
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

  .monster
    background-image: url(~assets/backgrounds/memorable_monster.webp)
    position: absolute
    bottom: 0
    left: -10%
    width: 100%
    height: 70%
    background-size: contain
    background-position: bottom left
    background-repeat: no-repeat
    // filter: contrast(0.97) brightness(0.7)
    z-index: 1

  .content, p, .social, .people, .people > div
    // animation: slideIn 1s ease-out

  .content
    text-align: left
    margin-left: auto
    border-right: 10px solid var(--border)
    padding-right: 150px
    padding-left: 60px

  .slide
    background-color: black

  .background > video
    opacity: 0.7

  .people
    display: flex
    margin-top: 50px

    div
      display: flex
      margin-right: 50px

      div
        flex-direction: column
        justify-content: center
        margin: 0 20px

    img
      width: 60px
      height: 60px
      clip-path: circle(50% at 50% 50%)
      object-fit: cover
      object-position: top

    h5
      text-transform: uppercase
      letter-spacing: 3px
      margin-bottom: 3px
      font-size: 14px

    h6
      font-weight: 400
      letter-spacing: 1px
      font-size: 14px

  @media (min-width: 1400px), (min-height: 900px)
    h1
      &:first-child
        margin-top: -32px

    p
      margin-bottom: -10px

  @media (max-width: 1400px), (max-height: 900px)
    .content
      padding-right: 110px

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

    .people
      img
        width: 50px
        height: 50px

      h5
        letter-spacing: 3px
        font-size: 13px

      h6
        letter-spacing: 1px
        font-size: 13px

  @media (max-width: 700px)
    .people
      flex-direction: column

      div
        margin-right: 0
        
        &:first-of-type
          margin-bottom: 20px

  @media (max-width: 700px), (max-height: 700px)
    h1:first-child
      margin-top: -10px

    .people
      img
        width: 50px
        height: 50px

      h5
        letter-spacing: 3px
        font-size: 12px

      h6
        letter-spacing: 1px
        font-size: 12px

  @media (max-width: 500px), (max-height: 600px)
    .people
      img
        width: 40px
        height: 40px

      h5
        letter-spacing: 3px
        font-size: 10px

      h6
        letter-spacing: 1px
        font-size: 10px
</style>

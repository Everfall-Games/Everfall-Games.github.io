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

    .content( fade-in )
      .heading
        h1 An immersive
        h1 Non-linear,
        h1 Horror experience

      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo pulvinar, sagittis enim et, porta mauris. 
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
      mask: (canvas, context) => {
        const gradient = context.createLinearGradient(0, 0, canvas.width, 0)

        gradient.addColorStop(0, 'white')
        gradient.addColorStop(0.3, 'white')
        gradient.addColorStop(1, 'transparent')

        context.fillStyle = gradient
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = 'white'
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import ../slide

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

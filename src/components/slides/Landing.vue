<template lang="pug">
  section.slide#landing
    //- .dots
    Dots( :mask="mask" )

    .background.octagon
    .background.octagon.reverse

    .monster

    .content
      .heading
        h1 We create
        h1.outline The unique

      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo pulvinar, sagittis enim et, porta mauris. Nunc mi ex, elementum sed tempor eget, vestibulum at lacus. Pellentesque aliquam sem eu suscipit vehicula. Pellentesque sollicitudin libero ac nibh pulvinar ullamcorper. 
    
    .social
      a( href="https://discord.gg/sucyFUs" aria-label="Link to Discord guild" )
        Icon discord

      a( href="https://www.instagram.com/everfallgames/" aria-label="Link to Instagram page" )
        Icon instagram

      a( href="https://twitter.com/EverfallGames" aria-label="Link to Twitter page" )
        Icon twitter
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
  @import slide

  @keyframes spin
    0%
      transform: rotate(0deg)

    50%
      transform: rotate(180deg)

    100%
      transform: rotate(360deg)

  .background.octagon
    background-image: url(~!!file-loader!assets/backgrounds/octagon.svg)
    width: 95vmin
    height: 95vmin
    background-size: contain
    z-index: 1
    background-repeat: no-repeat
    animation: spin 15s linear infinite
    background-position: center center
    right: -22vmin
    left: auto
    top: auto
    bottom: 0

    &.reverse
      animation-direction: reverse
      animation-duration: 30s
      animation-delay: -5s
      opacity: 0.5
      right: -20vmin
      // width: 98vmin
      // height: 98vmin

  @keyframes slideIn
    0%
      transform: translateX(-100%)

    100%
      transform: translateX(0)
      

  .content, p, .social, h1:not(.outline)
    animation: slideIn 1s ease-out

  .slide
    background-color: black

    .monster
      background-image: url(~assets/backgrounds/monster.webp)
      position: absolute
      top: 0
      right: 0
      width: 80%
      height: 100%
      background-size: contain
      background-position: bottom right
      background-repeat: no-repeat
      filter: contrast(0.97) brightness(0.7)
      z-index: 1

    .content
      border-left: 10px solid var(--border)
      padding-left: 150px
      padding-right: 60px
      position: relative
      margin-top: auto
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

    @keyframes blink
      0%
        opacity: 0.1

      20%
        opacity: 0.3

      40% 
        opacity: 0.1

      70%
        opacity: 0.2

      90%
        opacity: 0.5

    .heading
      position: relative
      display: flex
      flex-direction: column

      &::before
        content: ''
        position: absolute
        background: radial-gradient(ellipse at center, rgba(white, 0.3), rgba(white, 0.2) 20%, transparent 70%)
        width: 200%
        height: 300%
        top: -100%
        left: -50%
        opacity: 0.7
        animation: blink linear infinite 0.2s
        z-index: -1
        pointer-events: none

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

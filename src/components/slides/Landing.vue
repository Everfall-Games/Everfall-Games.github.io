<template lang="pug">
  section.slide.landing
    //- .dots
    Dots( :mask="mask" )

    .monster

    .content
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

  .slide
    background-color: black

    // .dots
    //   background-image: url(~assets/backgrounds/landing-dots.webp)
    //   position: absolute
    //   top: 100px
    //   left: 0
    //   width: 100%
    //   height: calc(100% - 100px)
    //   background-position: 0 100px
    //   background-size: cover
    //   background-attachment: fixed
    //   background-repeat: no-repeat

    .monster
      background-image: url(~assets/backgrounds/monster-octagons.webp)
      position: absolute
      top: 0
      right: 0
      width: 80%
      height: 100%
      background-size: contain
      background-position: bottom right
      background-repeat: no-repeat
      filter: contrast(0.97) brightness(0.6)

    .content
      border-left: 10px solid var(--border)
      padding-left: 150px
      padding-right: 60px
      position: relative
      margin-top: auto
      position: relative
      top: 10px

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

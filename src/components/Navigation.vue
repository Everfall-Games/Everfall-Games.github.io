<template lang="pug">
  section.navigation( @wheel="event => event.preventDefault()" @touchmove="event => event.preventDefault()" )
    Link.header( url="/" v-on:mousedown.native="() => { $store.commit('setSlide', 0); open = false }" )
      Icon logo

    Link( url="/lb-2" desktop ) 
      Icon lb2-symbol
      | LB-2

    Link( url="/coming-soon" desktop ) Coming soon
    Link( url="/#contact" v-on:mousedown.native="" desktop ) Contact

    button.hamburger( 
      @mousedown="event => event.preventDefault()"
      @click="open = !open" 
      :open="open" 
      aria-label="Menu button"
      mobile 
    )
      span
      span

    .menu( v-if="open" :style="{ backgroundImage: `url(${ MenuBackground })`}" mobile )
      Link( url="/lb-2" v-on:mousedown.native="() => { $router.push('/lb-2'); open = false }" ) 
        //- Icon lb2-symbol
        | LB-2

      Link( url="/coming-soon" v-on:mousedown.native="() => { $router.push('/coming-soon'); open = false }" ) Coming soon
      Link( url="/#contact" v-on:mousedown.native="() => { open = false }" ) Contact

    .line
</template>

<script>
  import config from 'config'
  import Icon from './Icon'
  import Link from './Link'
  import MenuBackground from '@/assets/backgrounds/menu.webp'

  export default {
    components: {
      Icon,
      Link,
    },

    data () {
      return {
        config,
        open: false,
        MenuBackground,
      }
    },

    computed: {
      path () {
        return this.$route.fullPath
      },
    },

    mounted () {
      if (this.path === '/') {
        window.scrollTo(0, 0)
      }
    },
  }
</script>

<style lang="sass" scoped>
  @keyframes slideIn
    0%
      transform: translateY(-100%)

    100%
      transform: translateY(0)

  section.navigation
    text-transform: uppercase
    padding: 0 160px
    width: 100%
    height: 100px
    position: fixed
    display: flex
    align-items: center
    justify-content: flex-start
    z-index: 5
    transform: translateY(0)
    animation: slideIn 0.4s ease-out

    &::before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: linear-gradient(to bottom, rgba(black, 0.7), transparent)
      content: ''

    .line
      position: absolute
      bottom: 0
      height: 1px
      width: 100%
      background: linear-gradient(to right, gray, white, transparent)
      left: 0
      opacity: 0.3
      max-width: 1400px
      z-index: 0

    a
      text-decoration: none
      display: flex
      align-items: center
      position: relative
      color: white
      fill: white

      &, *
        transition: color 0.2s, border-color 0.2s, fill 0.2s

    > a
      height: 100%

    a.header
      font-weight: 600
      font-size: 26px
      letter-spacing: 5px
      position: relative
      z-index: 3

      svg
        height: 32%
        width: auto

    > a:not(.header)
      margin-left: 90px
      font-weight: 400
      letter-spacing: 0.5px
      border-bottom: 6px solid transparent
      border-top: 6px solid transparent
      font-size: 16px

      &, svg
        color: rgb(160, 160, 160)
        fill: rgb(160, 160, 160)

      svg
        height: 22px
        margin-right: 10px

      &[current]
        border-bottom: 6px solid var(--border)

      &:hover, &[current]
        &, svg
          color: white
          fill: white

    .menu
      position: fixed
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      // background-image: url(~assets/backgrounds/menu.webp)
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: flex-start
      background-position: center right
      background-size: cover
      z-index: 2
      padding: 0 120px
      padding-top: 100px

      a:not(.header)
        position: relative
        margin: 0
        font-size: 50px
        margin-top: 50px
        color: white
        font-weight: 800
        letter-spacing: 3px
        border-bottom: none

        &:hover
          color: var(--border)

      &::before
        position: fixed
        width: 100vw
        height: 100vh
        left: 0
        top: 0
        background-color: var(--background)
        content: ''
        opacity: 0.7

    @media (max-width: 1400px), (max-height: 900px)
      padding: 0 120px
      height: 80px

      a.header
        font-size: 24px

      a:not(:first-child)
        font-size: 14px

    .hamburger
      margin-left: auto
      position: relative
      display: flex
      align-items: center
      justify-content: center
      width: 35px
      height: 35px
      right: -5px
      z-index: 3

      span
        display: inline-block
        position: absolute
        height: 3px
        width: 25px
        background-color: var(--text)
        pointer-events: none
        transition: transform 0.2s, top 0.2s, bottom 0.2s

        &:first-child
          top: 10px

        &:last-child
          bottom: 10px

      &[open]
        span
          &:first-child
            top: 16px
            transform: rotate(135deg)

          &:last-child
            bottom: 16px
            transform: rotate(-135deg)

    @media (max-width: 900px), (max-height: 800px)
      padding: 0 45px

      .menu
        padding: 0 45px
        padding-top: 100px

    @media (max-width: 700px), (max-height: 600px)
      height: 65px

      a.header
        font-size: 18px

    @media (min-width: 1001px)
      *[mobile]
        display: none

    @media (max-width: 1000px)
      *[desktop]
        display: none
</style>

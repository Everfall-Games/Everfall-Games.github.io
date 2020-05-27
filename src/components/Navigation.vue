<template lang="pug">
  section.navigation
    router-link.header( to="/" :current="path === '/' || path === ''" ) {{ config.meta.title }}

    router-link( to="/#lb-2" :current="path === '/#lb-2'" desktop ) 
      Icon lb2-symbol
      | LB-2

    router-link( to="/#coming-soon" :current="path === '/#coming-soon'" desktop ) Coming soon
    router-link( to="/#contact" :current="path === '/#contact'" desktop ) Contact

    button.hamburger( mobile @click="open = !open" :open="open" )
      span
      span

    .line
</template>

<script>
  import config from 'config'
  import Icon from '@/components/Icon'

  export default {
    components: {
      Icon,
    },

    data () {
      return {
        config,
        open: false,
      }
    },

    computed: {
      path () {
        return this.$route.fullPath
      },
    },

    mounted () {
      console.log(this.path)
    },
  }
</script>

<style lang="sass" scoped>
  section.navigation
    text-transform: uppercase
    padding: 0 160px
    width: 100%
    height: 100px
    position: fixed
    display: flex
    align-items: center
    justify-content: flex-start
    z-index: 1

    &::before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: linear-gradient(to bottom, rgba(black, 0.7), transparent)
      content: ''
      z-index: -1

    .line
      position: absolute
      bottom: 0
      height: 1px
      width: 100%
      background: linear-gradient(to right, gray, white, transparent)
      left: 0
      opacity: 0.3
      max-width: 1400px

    a
      color: white
      fill: white
      text-decoration: none
      transition: color 0.2s, border-color 0.2s, fill 0.2s
      height: 100%
      display: flex
      align-items: center

    a.header
      font-weight: 600
      font-size: 26px
      letter-spacing: 5px

    a:not(:first-child)
      margin-left: 90px
      font-weight: 400
      color: rgb(160, 160, 160)
      fill: rgb(160, 160, 160)
      letter-spacing: 0.5px
      border-bottom: 4px solid transparent
      border-top: 4px solid transparent
      font-size: 16px

      svg
        height: 22px
        margin-right: 10px

      &[current]
        // border-bottom: 4px solid var(--border)

      &:hover, &[current]
        color: white
        fill: white

    @media (max-width: 1400px)
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
      width: 25px
      height: 25px

      span
        display: inline-block
        position: absolute
        height: 3px
        width: 25px
        background-color: var(--text)
        pointer-events: none

        transition: transform 0.1s

        &:first-child
          transform: translateY(-6px)

        &:last-child
          transform: translateY(6px)

      &[open]
        span
          &:first-child
            transform: rotate(45deg)

          &:last-child
            transform: rotate(-45deg)

    @media (max-width: 900px)
      padding: 0 45px

    @media (min-width: 1001px)
      *[mobile]
        display: none

    @media (max-width: 1000px)
      *[desktop]
        display: none
</style>

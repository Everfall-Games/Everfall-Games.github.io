<template lang="pug">
  section.navigation
    router-link.header( to="/" :current="path === '/' || path === ''" ) {{ config.meta.title }}
    router-link( to="/#lb-2" :current="path === '/#lb-2'" ) LB-2
    router-link( to="/#coming-soon" :current="path === '/#coming-soon'" ) Coming Soon
    //- router-link( to="/#about" :current="path === '/#about'" ) About
    //- router-link( to="/#contact" :current="path === '/#contact'" ) Contact
    .line
</template>

<script>
  import config from 'config'

  export default {
    data () {
      return {
        config,
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
      text-decoration: none
      transition: color 0.2s, border-color 0.2s
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
      color: rgba(white, 0.6)
      letter-spacing: 0.5px
      border-bottom: 4px solid transparent
      border-top: 4px solid transparent
      font-size: 16px

      &[current]
        border-bottom: 4px solid var(--border)

      &:hover, &[current]
        color: white
</style>

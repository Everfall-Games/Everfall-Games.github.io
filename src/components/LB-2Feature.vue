<template lang="pug">
  section.feature
    img( :src="background" )

    .details
      h3 {{ text }}
      h4 {{ subtext }}  
</template>

<script>
  export default {
    props: ["text", "subtext", "background"],
  }
</script>

<style lang="sass" scoped>
  .feature
    position: relative
    max-width: 300px
    margin: 0 30px

  .f1
    img
      transform: translateY( -5% ) scale(1.2)

  .f2
    img
      transform: translateY( 15% ) translateX(-5%) scale(1.2)

  .f3
    img
      transform: translateY( 3% ) scale(1.2)

  .f4
    img
      transform: translateY( -5% ) translateX(5%) scale(1.2)

  img
    width: 100%
    transform: scale(1.2)

  .details
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
    text-transform: uppercase
    align-content: center
    padding: 0 40px
    
    h3, h4
      letter-spacing: 0 !important
      margin: 0 5px

    h3
      font-size: 30px !important

    h4
      font-weight: 600
</style>

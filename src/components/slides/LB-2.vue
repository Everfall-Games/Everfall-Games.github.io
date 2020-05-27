<template lang="pug">
  section.slide.landing#lb-2
    .content
      h1 Immersive
      h1.outline Horror
      p LB-2 is an open-world, Sci-fi horror game, which focuses on player vs AI gameplay. Taking inspiration from the likes of Alien: Isolation, it operates as a game of 'cat and mouse' as the player attempts to evade and outsmart a trio of demonic creatures in an underground lab facility.
    
    .bar
</template>

<style lang="sass" scoped>
  @import slide

  .slide
    align-items: center

  .content
    padding: 0 60px

    text-align: center

  .bar
    width: 100%
    max-width: 700px
    height: 10px
    background-color: var(--border)
    position: absolute
    bottom: 0

  @media (max-width: 1400px)
    .bar
      max-width: 600px

  @media (max-width: 900px)
    .bar
      max-width: 500px
</style>

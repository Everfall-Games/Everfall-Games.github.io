<template lang="pug">
  section.slide.landing
    div
      h1 We create
      h1.outline The unique
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut leo pulvinar, sagittis enim et, porta mauris. Nunc mi ex, elementum sed tempor eget, vestibulum at lacus. Pellentesque aliquam sem eu suscipit vehicula. Pellentesque sollicitudin libero ac nibh pulvinar ullamcorper. 
</template>

<style lang="sass" scoped>
  @import slide

  .slide > div
    border-left: 10px solid var(--border)
    padding-left: 160px
    padding-right: 60px

    @media (max-width: 1400px)
      padding-left: 120px

    @media (max-width: 900px)
      padding: 0 40px
      border-width: 6px
</style>

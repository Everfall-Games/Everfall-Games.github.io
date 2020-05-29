<template lang="pug">
  section.not-found
    h1 404
    h1 This page doesn't exist.
</template>

<style lang="sass" scoped>
  section.not-found
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    margin: auto
    height: 100vh

    h1:first-child
      font-size: 60px
      font-weight: 600

    h1:last-child
      font-weight: 200
      font-size: 25px
</style>

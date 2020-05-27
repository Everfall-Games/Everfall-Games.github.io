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
      font-size: 40px

    h1:last-child
      font-weight: 200
      font-size: 20px
</style>

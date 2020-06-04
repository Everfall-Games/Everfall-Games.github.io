<template lang="pug">
  .input
    span.value( contenteditable )
    .placeholder {{ placeholder }}
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        required: true,
      },

      value: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="sass" scoped>
  .input
    border-bottom: 2px solid var(--text)
    position: relative
    min-height: 45px
    margin-bottom: 45px
    transition: margin 0.1s
    opacity: 0.2s
    
    &:not(:focus-within)
      opacity: 0.5
      margin-right: 80px

    &, *
      outline: none

    .placeholder
      position: absolute
      top: 0
      pointer-events: none
      text-transform: uppercase
      font-weight: 400
      font-size: 12px
      letter-spacing: 3px
      transition: transform 0.1s

    .placeholder, &
      display: flex
      align-items: center

    .placeholder, .value
      width: 100%
      height: 100%
      line-height: 45px

    &:focus-within > .placeholder, .value:not(:empty) ~ .placeholder
      transform: translateY(-55%)
      line-height: auto
</style>

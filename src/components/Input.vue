<template lang="pug">
  .input
    slot
    .placeholder {{ placeholder }}
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        required: true,
      },

      // value: {
      //   type: String,
      //   required: true,
      // },

      // autocomplete: {
      //   type: String,
      // },
    },
  }
</script>

<style lang="sass" scoped>
  .input
    position: relative
    min-height: 60px
    margin-bottom: 60px
    transition: margin 0.1s
    opacity: 0.2s

    &[disabled]
      pointer-events: none
      opacity: 0.6
    
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
      font-size: 14px
      letter-spacing: 3px
      transition: transform 0.1s

    .placeholder, &
      display: flex
      align-items: center

    .placeholder, textarea, input, .value
      width: 100%
      min-height: 60px
      line-height: 60px

    textarea, input, .value
      background-color: transparent
      border: none
      color: var(--text)
      font-size: 22px
      font-family: inherit
      letter-spacing: 0.5px
      resize: none
      border-bottom: 1px solid var(--text)
      box-shadow: none

      &:-webkit-autofill,
      &:-webkit-autofill:hover, 
      &:-webkit-autofill:focus, 
      &:-webkit-autofill:active 
        transition: background-color 5500s ease-in-out 0s
        -webkit-text-fill-color: white !important

      &[invalid]
        color: var(--border)
        border-color: var(--border)
        outline: none

        & ~ .placeholder
          color: var(--border)

    &:focus-within > .placeholder, input:not([data=""]) ~ .placeholder, .value:not(:empty) ~ .placeholder
      transform: translateY(-55%)
      line-height: auto

    @media (max-width: 900px), (max-height: 800px)
      min-height: 45px
      margin-bottom: 45px

      .placeholder
        font-size: 12px

      textarea, input, .value
        font-size: 18px

      .placeholder, textarea, input, .value
        min-height: 45px
        line-height: 45px

    @media (max-width: 600px)
      min-height: 30px
      margin-bottom: 30px

      .placeholder
        font-size: 11px

      textarea, input, .value
        font-size: 14px

      .placeholder, textarea, input, .value
        min-height: 30px
        line-height: 30px

</style>

<template lang="pug">
  section.card
    .header
      Icon.icon lb2-symbol

      .left
        h6 LB-2
        h5 {{ stage }} 

      //- .timer {{ computedTime }}

    .details
      img( :src="require('@/assets/backgrounds/' + image)" )
      .description
        | {{ stage }} completion due on 
        span {{ date }}
        hr
        | Changes Planned Upon Completion of 
        span {{ stage }}
        |  detailed below

    .list
      div( v-for="(name, key) in list" :key="key" )
        span +
        | {{ name }}
</template>

<script>
  import Icon from '@/components/Icon'

  export default {
    props: ["date", "stage", "image", "description", "list"],

    components: {
      Icon,
    },

    data () {
      return {
        endTime: new Date(this.date).getTime(),
        currentTime: 0,
      }
    },

    computed: {
      computedTime () {
        const difference = this.currentTime

        const days = Math.floor(difference / 1000 / 60 / 60 / 24)
        const hours = Math.floor(difference / 1000 / 60 / 60 % 24)
        const minutes = Math.floor(difference / 1000 / 60 % 60)
        const seconds = Math.floor(difference / 1000 % 60)

        return `${String(days).padEnd(2,0)}:${String(hours).padEnd(2,0)}:${String(minutes).padEnd(2,0)}`
      },
    },

    mounted () {
      this.currentTime = this.endTime - Date.now()

      setInterval(() => {
        this.currentTime = this.endTime - Date.now()
      }, 1000)
    },
  }
</script>

<style lang="sass" scoped>
  .card
    background: linear-gradient(to bottom right, #101010, black)
    text-transform: uppercase
    text-align: left
    display: flex
    flex-direction: column
    width: 260px
    margin: 0 20px
    margin-top: 50px
    height: 325px
    padding: 10px 25px
    clip-path: polygon(100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0 20px, 20px 0)

    .icon
      width: 25px
      fill: white
      margin-left: -10px
      margin-right: 10px

    .header
      display: flex
      align-items: center
      justify-content: flex-start
      width: 100%

    h6
      font-size: 12px
      letter-spacing: 2px

    h5
      font-size: 16px

    .timer
      margin-left: auto
      font-weight: 600
      letter-spacing: 1px

    .details
      height: 125px
      padding-top: 10px
      padding-bottom: 10px
      display: flex
      align-items: center

      .description
        flex-grow: 1
        font-size: 10px
        text-transform: none
        padding-left: 10px

        span
          color: var(--border)
          text-shadow: 0 0 5px var(--border)

        hr
          margin: 10px 0
          outline: none
          border: none
          height: 1px
          background-color: rgba(white, 0.1)

      img
        height: 100%

    .list
      font-weight: 600
      letter-spacing: 1px

      div:not(:last-child)
        margin-bottom: 5px

      div
        font-size: 14px

      span
        font-size: 20px
        margin-right: 5px
        font-weight: 400
        color: var(--border)

</style>

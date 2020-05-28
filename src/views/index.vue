<template lang="pug">
  section.home( ref="home" )
    Landing
    LB2
    ComingSoon
</template>

<script>
  import Landing from '@/components/slides/Landing'
  import ComingSoon from '@/components/slides/ComingSoon'
  import LB2 from '@/components/slides/LB-2'

  export default {
    components: {
      Landing,
      ComingSoon,
      LB2,
    },

    data () {
      return {
        snapPoints: [],
        isScrolling: false,
      }
    },

    computed: {
      slide () {
        return this.$store.state.slide
      },
    },

    methods: {
      setSnapPoints () {
        const { home } = this.$refs

        this.snapPoints = []

        for (let i = 0; i < Math.floor(home.clientHeight / home.children[0].clientHeight); i++) {
          this.snapPoints.push(i * home.children[0].clientHeight + 1)
        }
      },

      move (delta) {
        if (this.slide + delta < 0 || this.slide + delta > this.snapPoints.length - 1) return

        this.isScrolling = true

        this.$store.commit('setSlide', this.slide + delta)

        setTimeout(() => {
          this.isScrolling = false
        }, 300)
      },
    },

    watch: {
      slide (slide) {
        window.scrollTo({
          top: this.snapPoints[slide], 
          behavior: 'smooth',
        })
      },
    },

    mounted () {
      this.setSnapPoints()

      let lastPos = window.scrollY

      window.addEventListener('wheel', event => {
        if (this.isScrolling) return

        const delta = event.deltaY > 0 ? 1 : -1

        this.move(delta)

        lastPos = window.scrollY
      })

      window.addEventListener('resize', () => { 
        this.setSnapPoints()

        window.scrollTo({
          top: this.snapPoints[this.slide], 
        })
      })
    },
  }
</script>

<style lang="sass" scoped>
  .home
    > *
      scroll-snap-align: end
</style>

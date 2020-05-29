<template lang="pug">
  section.home( ref="home" )
    Landing
    About
    //- LB2
    //- ComingSoon
</template>

<script>
  import Landing from '@/components/slides/Landing'
  import About from '@/components/slides/About'
  // import ComingSoon from '@/components/slides/ComingSoon'
  // import LB2 from '@/components/slides/LB-2'

  export default {
    components: {
      Landing,
      About,
      // ComingSoon,
      // LB2,
    },

    data () {
      return {
        snapPoints: [],
        isScrolling: false,
        paths: ['/', '/#about'],
        lastPos: 0,
      }
    },

    computed: {
      slide () {
        return this.$store.state.slide
      },

      path () {
        return this.$route.fullPath
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

        this.$router.push(this.paths[this.slide])

        setTimeout(() => {
          this.isScrolling = false
        }, 350)
      },

      wheel (event) {
        if (this.isScrolling) return

        const delta = event.deltaY > 0 ? 1 : -1

        this.move(delta)

        this.lastPos = window.scrollY
      },

      resize () {
        this.setSnapPoints()

        window.scrollTo({
          top: this.snapPoints[this.slide], 
        })
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

      this.lastPos = window.scrollY

      requestAnimationFrame(() => {
        this.$store.commit('setSlide', this.paths.indexOf(this.path))

        if (/\#/.test(this.path)) {
          document.querySelector(this.path.replace('/', '')).scrollIntoView()
        }
      })

      window.addEventListener('wheel', this.wheel)

      window.addEventListener('resize', this.resize)
    },

    destroyed () {
      window.removeEventListener('wheel', this.wheel)

      window.removeEventListener('resize', this.resize)
    },
  }
</script>

<template lang="pug">
  section.scroller( 
    ref="scroller" 
    @touchstart="touchstart" 
    @touchmove="touchmove" 
    @touchend="touchend" 
    @wheel="wheel" 
  )
    slot
</template>

<script>
  export default {
    props: {
      paths: {
        type: Array,
        required: true,
      },
    },

    data () {
      return {
        snapPoints: [],
        lastPos: 0,
        touchstartPos: null,
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
        const { scroller } = this.$refs

        this.snapPoints = []

        for (let i = 0; i < Math.floor(scroller.clientHeight / scroller.children[0].clientHeight); i++) {
          this.snapPoints.push(i * scroller.children[0].clientHeight + 1)
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

        this.touchstartPos = null
      },

      wheel (event) {
        event.preventDefault()
        
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

      touchstart (event) {
        const [ touch ] = event.touches
        this.touchstartPos = touch.screenY
        event.preventDefault()
      },

      touchmove ({ touches }) {
        if (this.touchstartPos === null) return
        const [touch] = touches
        if (touch.screenY - this.touchstartPos > 100) this.move(-1)
        if (touch.screenY - this.touchstartPos < -100) this.move(+1)
      },

      touchend () {
        this.touchstartPos = null
      },

      scroll (event) {
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

      // window.addEventListener('wheel', this.wheel)
      window.addEventListener('resize', this.resize)

      window.addEventListener('scroll', this.scroll)
    },

    destroyed () {
      // window.removeEventListener('wheel', this.wheel)
      window.removeEventListener('resize', this.resize)
    },
  }
</script>

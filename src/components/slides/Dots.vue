<template lang="pug">
  .dots( v-once )
    canvas( ref="canvas" )
</template>

<script>
  import dotsStyle from '!!css-loader!sass-loader!./dots.sass'

  export default {
    props: {
      mask: {
        type: Function,
      },
    },

    data () {
      return {
        renderInterval: null,
        dimensions: {
          x: 0,
          y: 0,
        },
      }
    },

    methods: {
      resize () {
        this.$refs.canvas.width = window.innerWidth
        this.$refs.canvas.height = window.innerHeight

        this.offset = 25 + (Math.max(window.innerWidth, window.innerHeight) / 40)

        Object.assign(this.dimensions, {
          x: Math.ceil(window.innerWidth / this.offset) + 2,
          y: Math.ceil(window.innerHeight / this.offset) + 2,
        })

        context.fillStyle = 'white'
      },
    },

    mounted () {
      const { canvas } = this.$refs

      const { dimensions } = this

      const context = canvas.getContext('2d') 

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      context.fillStyle = 'white'

      window.context = context

      const radius = 4

      this.offset = 25 + (Math.max(window.innerWidth, window.innerHeight) / 40)

      Object.assign(this.dimensions, {
        x: Math.ceil(window.innerWidth / this.offset) + 2,
        y: Math.ceil(window.innerHeight / this.offset) + 2,
      })

      window.addEventListener('resize', this.resize)

      let frame = 0, step = 1

      const seed = Math.random()

      const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height)

        for (let y = dimensions.y; y--;) {
          context.beginPath()

          for (let x = dimensions.x; x--;) {

            const X = x / dimensions.x
            const Y = y / dimensions.y
            const T = frame / 100
            const AMP = 4 * (Math.floor(Y * 10) % 3 + 1)
            const PI = Math.PI / 2

            const M = Math.exp(Math.sin((X + Y + T) * AMP * PI)) / 4 + 0.2

            context.arc(
              Math.round((this.offset - radius) * x), 
              Math.round((this.offset - radius) * y - 50), 
              radius * M, 
              0, 
              2 * Math.PI,
            )
          }

          context.fill()
        }

        if (this.mask) {
          context.globalCompositeOperation = 'destination-in'

          this.mask(canvas, context)

          context.globalCompositeOperation = 'source-over'
        }

        if (frame === 100) frame = 0

        frame += step
      }

      render()

      this.renderInterval = setInterval(render, 1000 / 30)
    },

    destroyed () {
      clearInterval(this.renderInterval)
      window.removeEventListener('resize', this.resize)
    },
  }
</script>

<style lang="sass" scoped>
  .dots
    position: absolute
    overflow: hidden
    width: 100%
    height: 100%
    top: 0
    left: 0
    opacity: 0.3
    pointer-events: none
    // clip: rect(0, auto, auto, 0)

  canvas
    width: 100vw
    height: 100vh
    // position: fixed
    top: 100px
    left: 0
</style>

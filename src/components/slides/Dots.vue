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

    mounted () {
      const { canvas } = this.$refs

      const context = canvas.getContext('2d') 

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      context.fillStyle = 'white'

      window.context = context

      const radius = 4

      let offset = 25 + (Math.max(window.innerWidth, window.innerHeight) / 40)

      const dimensions = {
        x: Math.ceil(window.innerWidth / offset) + 2,
        y: Math.ceil(window.innerHeight / offset) + 2,
      }

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        offset = 25 + (Math.max(window.innerWidth, window.innerHeight) / 40)

        Object.assign(dimensions, {
          x: Math.ceil(window.innerWidth / offset) + 2,
          y: Math.ceil(window.innerHeight / offset) + 2,
        })

        context.fillStyle = 'white'
      })

      let frame = 0, step = 1

      const seed = Math.random()

      const render = () => {
        for (let y = dimensions.y; y--;) {
          for (let x = dimensions.x; x--;) {
            const X = x / dimensions.x
            const Y = y / dimensions.y
            const T = frame / 200
            const AMP = 4 * (Math.floor(Y * 10) % 3 + 1)
            const PI = Math.PI / 2

            const M = Math.exp(Math.sin((X + Y + T) * AMP * PI), 2) / 4 + 0.2

            const R = radius * M

            const OX = (offset - radius) * x
            const OY = (offset - radius) * y - 50

            context.clearRect(OX - radius, OY - radius, radius * 5, radius * 5)

            context.beginPath()

            context.arc(OX, OY, R, 0, 2 * Math.PI)

            context.fill()
          }
        }

        if (this.mask) {
          context.globalCompositeOperation = 'destination-in'

          this.mask(canvas, context)

          context.globalCompositeOperation = 'source-over'
        }

        if (frame === 200) frame = 0

        frame += step
      }

      render()

      setInterval(render, 1000 / 60)
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
    clip: rect(0, auto, auto, 0)

  canvas
    width: 100vw
    height: 100vh
    position: fixed
    top: 100px
    left: 0
</style>

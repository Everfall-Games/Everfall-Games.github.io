<template lang="pug">
  section.slide#contact
    .background
      //- video( 
      //-   src="@/assets/backgrounds/about.mp4" 
      //-   ref="backgroundVideo" 
      //-   poster="@/assets/backgrounds/about.webp"
      //-   muted 
      //-   autoplay 
      //-   loop 
      //- )
      img( src="@/assets/backgrounds/contact.webp" )

    Dots( :mask="mask" )

    .content
      .form
        Input( placeholder="Name" v-model="name" :validate="/..+/" )
        Input( placeholder="Subject" v-model="subject" :validate="/..+/" )
        Input( placeholder="Email" v-model="email" :validate="emailRegex" )
        Input( placeholder="Message" v-mode="message" :validate="/.{32}.*/" )

      .links
        h4 Connect with us
        a( href="https://discord.gg/sucyFUs" ) Discord
        a( href="https://twitter.com/EverfallGames" ) Twitter
        a( href="https://twitter.com/EverfallGames" ) Instagram

        h4 Everfall
        a( href="#" disabled ) Careers
        a( href="#" disabled ) Merch

        h4 Legal
        a( href="#" disabled ) Terms of Service
        a( href="#" disabled ) Privacy Policy
      
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from './Dots'
  import Input from '@/components/Input'

  export default {
    components: {
      Icon,
      Dots,
      Input,
    },

    data () {
      return {
        canvas: null,
        context: null,
        gradients: false,
        name: '',
        email: '',
        emailRegex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
        subject: '',
        message: '',
      }
    },

    methods: {
      mask (canvas, context) {
        if (!this.canvas) return

        const gradientCanvas = this.canvas
        const gradientContext = this.context

        if (!this.gradients) {
          gradientCanvas.width = canvas.width / 2
          gradientCanvas.height = canvas.height / 2

          gradientContext.clearRect(0, 0, canvas.width, canvas.height)

          const R = 60

          const X1 = 0
          const Y1 = gradientCanvas.height - R * 4

          const X2 = gradientCanvas.width - R * 5
          const Y2 = 20

          const gradient = (x, y) => {
            const gradient = context.createRadialGradient(x + R * 2, y + R * 2, 0, x + R * 2, y + R * 2, R * 2)
            gradient.addColorStop(1, 'transparent')
            gradient.addColorStop(0, 'white')

            return gradient
          }

          gradientContext.fillStyle = gradient(X1, Y1)
          gradientContext.fillRect(X1, Y1, R * 4, R * 4)

          gradientContext.fillStyle = gradient(X2, Y2)
          gradientContext.fillRect(X2, Y2, R * 4, R * 4)

          this.gradients = true
        }

        context.drawImage(gradientCanvas, 0, 0, canvas.width, canvas.height)
      },

      resize () {
        this.gradients = false
      },
    },

    mounted () {
      this.canvas = document.createElement('canvas')
      this.context = this.canvas.getContext('2d')

      window.addEventListener('resize', this.resize)

      this.$refs.backgroundVideo.play()
    },

    destroyed () {
      this.canvas.remove()
      window.removeEventListener('resize', this.resize)
    },
  }
</script>

<style lang="sass" scoped>
  @import slide

  @keyframes slideIn
    0%
      transform: translateX(100%)

    100%
      transform: translateX(0)

  .content, p, .social, .people, .people > div
    // animation: slideIn 1s ease-out

  .content
    text-align: left
    margin-right: auto
    border-left: 10px solid var(--border)
    padding-left: 150px
    padding-right: 60px
    display: flex
    width: 100%

    > *
      flex-grow: 1
      display: flex
      flex-direction: column
      width: 50%

    .form
      margin-right: 150px

    h4
      text-transform: uppercase
      font-weight: 400
      font-size: 12px
      letter-spacing: 3px
      opacity: 0.7
      margin-bottom: 10px

      &:not(:first-child)
        margin-top: 40px

    a
      text-decoration: none
      margin-bottom: 5px
      font-weight: 200
      letter-spacing: 0.5px

      &[disabled]
        opacity: 0.4
        pointer-events: none

  .background > img
    opacity: 0.7

  .people
    display: flex
    margin-top: 50px

    div
      display: flex
      margin-right: 50px

      div
        flex-direction: column
        justify-content: center
        margin: 0 20px

    img
      width: 60px
      height: 60px
      clip-path: circle(50% at 50% 50%)
      object-fit: cover
      object-position: top

    h5
      text-transform: uppercase
      letter-spacing: 3px
      margin-bottom: 3px
      font-size: 14px

    h6
      font-weight: 400
      letter-spacing: 1px
      font-size: 14px

  @media (min-width: 1400px), (min-height: 900px)
    h1
      &:first-child
        margin-top: -32px

    p
      margin-bottom: -10px

  @media (max-width: 1400px), (max-height: 900px)
    .content
      padding-left: 110px

      > .form
        margin-right: 110px

    .social
      margin-left: 120px

    h1:first-child
        margin-top: -22px

  @media (max-width: 900px), (max-height: 800px)
    .content
      padding: 0 40px
      border-width: 6px

      > .form
        margin-right: 40px

    .social
      margin-left: 45px

    h1:first-child
      margin-top: -18px

    .people
      img
        width: 50px
        height: 50px

      h5
        letter-spacing: 3px
        font-size: 13px

      h6
        letter-spacing: 1px
        font-size: 13px

  @media (max-width: 700px)
    .people
      flex-direction: column

      div
        margin-right: 0
        
        &:first-of-type
          margin-bottom: 20px

  @media (max-width: 700px), (max-height: 700px)
    h1:first-child
      margin-top: -10px

    .people
      img
        width: 50px
        height: 50px

      h5
        letter-spacing: 3px
        font-size: 12px

      h6
        letter-spacing: 1px
        font-size: 12px

  @media (max-width: 500px), (max-height: 600px)
    .people
      img
        width: 40px
        height: 40px

      h5
        letter-spacing: 3px
        font-size: 10px

      h6
        letter-spacing: 1px
        font-size: 10px
</style>

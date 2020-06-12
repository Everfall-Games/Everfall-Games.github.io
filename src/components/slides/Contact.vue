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
      .form( @keydown="keydown")
        Input( placeholder="Name" :disabled="loading" )
          input( 
            v-model="name" 
            :data="name" 
            required 
            autocomplete="name" 
            @input="nameTouch = true" 
            :invalid="!nameValid && nameTouch" 
          )

        Input( placeholder="Subject" :disabled="loading")
          input( 
            v-model="subject" 
            :data="subject" 
            required
            @input="subjectTouch = true" 
            :invalid="!subjectValid && subjectTouch" 
          )

        Input( placeholder="Email" :disabled="loading")
          input( 
            v-model="email" 
            :data="email" 
            required type="email" 
            autocomplete="email" 
            @input="emailTouch = true" 
            :invalid="!emailValid && emailTouch" 
          )

        Input( placeholder="Message" :disabled="loading")
          span.value( 
            contenteditable 
            @input="({ target }) => { body = target.innerText; bodyTouch = true }" 
            :invalid="!bodyValid && bodyTouch" 
            ref="bodyInput"
            required 
          )

        div.submit( @click="submit" role="button" :loading="loading" :disabled="!formValid" ) 
          div
            .background.octagon
            //- .background.octagon.reverse
          span {{ submitMessage }}

      .links( desktop )
        .group
          h4 Connect with us
          a( href="https://discord.gg/sucyFUs" ) Discord
          a( href="https://twitter.com/EverfallGames" ) Twitter
          a( href="https://twitter.com/EverfallGames" ) Instagram

        .group
          h4 Everfall
          a( href="#" disabled ) Careers
          a( href="#" disabled ) Merch

        .group
          h4 Legal
          a( href="#" disabled ) Terms of Service
          a( href="#" disabled ) Privacy Policy
</template>

<script>
  import Icon from '@/components/Icon'
  import Dots from './Dots'
  import Input from '@/components/Input'

  import axios from 'axios'

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
        body: '',
        nameTouch: false,
        emailTouch: false,
        subjectTouch: false,
        bodyTouch: false,
        loading: false,
        submitMessage: 'Send message',
      }
    },

    computed: {
      nameValid () {
        return Boolean(this.name)
      },

      emailValid () {
        return this.emailRegex.test(this.email)
      },

      subjectValid () {
        return Boolean(this.subject)
      },

      bodyValid () {
        return Boolean(this.body)
      },

      formValid () {
        return this.nameValid && this.emailValid && this.subjectValid && this.bodyValid
      },
    },

    methods: {
      keydown ({ key }) {
        if (key === 'Enter' && this.formValid) this.submit()
      },

      async submit () {
        this.loading = true

        const { 
          name, 
          email, 
          subject, 
          body,
          nameValid, 
          emailValid, 
          subjectValid, 
          bodyValid,
          formValid,
        } = this

        if (this.formValid) {
          // console.table({ 
          //   name, 
          //   email, 
          //   subject, 
          //   body,
          // })

          try {
            await axios({
              url: '/mail',
              method: 'POST',
              data: {
                name,
                email,
                subject,
                body,
              },
            })

            this.name = ''
            this.email = ''
            this.subject = ''
            this.body = ''
            this.$refs.bodyInput.innerHTML = ''

            this.nameTouch = false
            this.emailTouch = false
            this.bodyTouch = false
            this.subjectTouch = false

            this.submitMessage = 'Message sent'
          } catch (error) {
            this.submitMessage = 'Error sending message'

            console.error(new Error(error.message), { 
              name, 
              email, 
              subject, 
              body,
              nameValid, 
              emailValid, 
              subjectValid, 
              bodyValid,
              formValid,
            })
          }
        } else {
          console.error(new Error('Failed to send message'), { 
            name, 
            email, 
            subject, 
            body,
            nameValid, 
            emailValid, 
            subjectValid, 
            bodyValid,
            formValid,
          })
        }

        // const context = this

        setTimeout(() => {
          this.submitMessage = 'Send message'
        }, 3500)

        this.loading = false
      },

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

      // this.$refs.backgroundVideo.play()
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

  @keyframes spin
    0%
      transform: rotate(0deg)

    50%
      transform: rotate(180deg)

    100%
      transform: rotate(360deg)

  // .background.octagons
  //   z-index: 1
  //   overflow: hidden

  //   > div
  //     position: absolute
  //     top: 0
  //     left: 0
  //     width: 100%
  //     height: 100%
  //     transform: translateX(22vmin)

  .submit
    position: relative
    height: 100px
    display: flex
    align-items: center
    padding-left: 50px
    margin-bottom: -50px
    margin-left: -50px
    text-transform: uppercase
    letter-spacing: 1px
    font-weight: 400
    cursor: pointer

    div
      position: absolute
      top: 0
      left: 0

    span
      position: relative
      z-index: 2

    &[disabled]
      opacity: 0.6

      .background.octagon
        animation-play-state: paused

    &[loading] > div > .background.octagon
      animation-duration: 4s

  .background.octagon
    background-image: url(~!!file-loader!assets/backgrounds/submit-octagon.svg)
    height: 100px
    width: 100px
    background-size: contain
    z-index: 1
    background-repeat: no-repeat
    animation: spin 15s linear infinite
    background-position: center center
    left: 0
    bottom: 0
    transform-origin: center

    &.reverse
      animation-direction: reverse
      animation-duration: 30s
      animation-delay: -5s
      // opacity: 0.5
      // transform: translateX(20vmin)
      // width: 98vmin
      // height: 98vmin

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
    opacity: 1

  .link
    height: 100%

  .links
    justify-content: center

  .links > .group 
    display: flex
    flex-direction: column
    margin: 20px

    h4
      font-size: 16px

    *
      font-size: 20px

  @media (max-width: 1400px), (max-height: 900px)
    .content
      padding-left: 110px

      > .form
        margin-right: 110px

  @media (max-width: 900px), (max-height: 800px)
    .content
      padding: 0 40px
      border-width: 6px

      > .form
        margin-right: 40px

    .links > .group 
      margin: 10px

      h4
        font-size: 12px

      *
        font-size: 16px

    .submit
      margin-left: 0
      padding-left: 35px
      margin-bottom: -35px
      height: 75px
      font-size: 14px

    .background.octagon
      height: 75px
      width: 75px

  @media (max-width: 800px)
    .links
      width: 20%

    h1:first-child
      margin-top: -10px

    .links > .group 
      margin: 8px

      h4
        font-size: 10px

      *
        font-size: 14px

  @media (max-width: 600px)
    .content
      flex-direction: column

    .form
      width: 100%

    .links
      flex-direction: row
      justify-content: space-between
      width: 100%

    .submit
      margin-bottom: 40px

</style>

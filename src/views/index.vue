<template lang="pug">
  Scroller( :paths="[ '/', '/#about' ]" )
    Landing
    About
    //- LB2
    //- ComingSoon
</template>

<script>
  import Scroller from '@/components/Scroller'
  import Landing from '@/components/slides/Landing'
  import About from '@/components/slides/About'
  // import ComingSoon from '@/components/slides/ComingSoon'
  // import LB2 from '@/components/slides/LB-2'

  export default {
    components: {
      Scroller,
      Landing,
      About,
      // ComingSoon,
      // LB2,
    },
  }
</script>

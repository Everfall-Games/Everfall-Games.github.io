<template lang="pug">
  //- Scroller( :paths="[ '/coming-soon', '/coming-soon/#limbo' ]" )
  //-   ComingSoon
  Limbo2
</template>

<script>
  import Limbo from '@/components/slides/Limbo/1'
  import Limbo2 from '@/components/slides/Limbo/2'
  import Scroller from '@/components/Scroller'

  export default {
    components: {
      Scroller,
      Limbo,
      Limbo2,
    },
  }
</script>

<template lang="pug">
  //- Scroller( :paths="[ '/coming-soon', '/coming-soon/#limbo' ]" )
  //-   ComingSoon
  ComingSoon2
</template>

<script>
  import ComingSoon from '@/components/slides/ComingSoon'
  import ComingSoon2 from '@/components/slides/ComingSoon2'
  import Scroller from '@/components/Scroller'

  export default {
    components: {
      Scroller,
      ComingSoon,
      ComingSoon2,
    },
  }
</script>

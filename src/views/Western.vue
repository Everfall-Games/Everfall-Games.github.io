<template lang="pug">
  Scroller( :paths="[ '/western', '/western/#more-info' ]" )
    Western
    Western2
</template>

<script>
  import Western from '@/components/slides/Western/1'
  import Western2 from '@/components/slides/Western/2'
  import Scroller from '@/components/Scroller'

  export default {
    components: {
      Scroller,
      Western,
      Western2,
    },
  }
</script>

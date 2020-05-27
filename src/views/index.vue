<template lang="pug">
  section.home
    Landing
    LB2
    ComingSoon
</template>

<script>
  import Landing from '@/components/slides/Landing'
  import ComingSoon from '@/components/slides/ComingSoon'
  import LB2 from '@/components/slides/LB-2'

  export default {
    components: {
      Landing,
      ComingSoon,
      LB2,
    },
  }
</script>

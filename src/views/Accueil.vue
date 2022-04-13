<template>
  <div class="home">
    <GlobalHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  name: 'HomeView',
  components: {
    GlobalHeader
  }
}
</script>

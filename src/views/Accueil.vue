<template lang="fr">

  
  <div class="home">
    <GlobalHeader />

    

    <AboutSection />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue'
import AboutSection from '@/components/AboutSection.vue'

export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    AboutSection
  }
}
</script>



<style scoped lang="scss">

</style>
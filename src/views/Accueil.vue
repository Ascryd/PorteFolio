<template lang="fr">

  
  <div class="home">
    <GlobalHeader />

    <PresentSection />

    <AboutSection />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import PresentSection from '@/components/PresentSection.vue'

export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    AboutSection,
    PresentSection
  }
}
</script>



<style scoped lang="scss">

</style>
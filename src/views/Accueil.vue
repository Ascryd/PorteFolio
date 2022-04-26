<template lang="fr">

  
  <div class="home">
    <GlobalHeader />

    <PresentSection />

    <AboutSection />

    <SkillsSection />

    <ProjectSection />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import PresentSection from '@/components/PresentSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'

export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    AboutSection,
    PresentSection,
    SkillsSection,
    ProjectSection
  }
}
</script>



<style scoped lang="scss">

</style>
<template lang="fr">

  <div class="body">

    <ProjectModal />

    <div class="home">

      <GlobalHeader />

      <PresentSection />

      <AboutSection />

      <SkillsSection />

      <ProjectSection />
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GlobalHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import PresentSection from '@/components/PresentSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ProjectModal from '@/components/ProjectModal.vue'


export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    AboutSection,
    PresentSection,
    SkillsSection,
    ProjectSection,
    ProjectModal,
  },
}
</script>



<style scoped lang="scss">

</style>
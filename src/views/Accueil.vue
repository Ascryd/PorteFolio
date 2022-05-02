<template lang="fr">

  <div class="body">

    <ProjectModal v-if="isActive" />

    <div class="home">

      <GlobalHeader />

      <PresentSection />

      <AboutSection />

      <SkillsSection />

      <ProjectSection />

      <ContactSection />
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
import ContactSection from '@/components/ContactSection.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    AboutSection,
    PresentSection,
    SkillsSection,
    ProjectSection,
    ProjectModal,
    ContactSection
  },

  setup() {
    const store = useStore()

    let isActive = false

    isActive = computed(() => store.getters.isActive)

    console.log(isActive.value);

    // let isActive = computed(() => {
    //   console.log('je suis là');
    //   console.log(store.getters.isActive);
    //   return store.getters.isActive
    // })
    
    return {isActive}
  }
}
</script>



<style scoped lang="scss">

.body {
  padding-bottom: 150px;
}
</style>
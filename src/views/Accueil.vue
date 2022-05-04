<template lang="fr">

  <div class="body">

    <Transition name="toggleCarousel">
      <ProjectModal v-if="isActive" />
    </Transition>

    <GlobalHeader />
    
    
    <div class="content">

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

.toggleCarousel-enter-active,
.toggleCarousel-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.toggleCarousel-enter-from,
.toggleCarousel-leave-to {
    opacity: 0;

}

.toggleCarousel-enter-to,
.toggleCarousel-leave-from {
    opacity: 1;
}

.body {
  padding-bottom: 150px;

  .content {
    display: flex;
    flex-direction: column;
    gap: clamp(60px, 35vw, 350px);
  }
}
</style>
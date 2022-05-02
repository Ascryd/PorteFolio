<template lang="fr">
    <div class="modal">
        <div class="overlay"></diV>

        <CarouselGlobal class='carousel' v-slot="{ currentSlide }">
            <CarouselSlide class="carouselSlide" v-for="(slide, index) in carouselSlides" :key='index'>
                <div v-show="currentSlide === index + 1" class='slide-info'>
                    <img :src="require(`../assets/projects_pics/${slide}.png`)" alt="Illustration du projet">
                </div>
            </CarouselSlide>
        </CarouselGlobal>
    </div>
</template>



<script>
import CarouselGlobal from '@/components/carouselModal/CarouselGlobal.vue'
import CarouselSlide from '@/components/carouselModal/CarouselSlide.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'
import { reactive } from 'vue'

export default {
    name: 'ProjectModal',
    components: {
        CarouselGlobal,
        CarouselSlide
    },

    setup() {
        const store = useStore()
        
        let carouselSlides = reactive['leopard', 'hérisson_starbucks']

        // console.log(store.getters.galleryList);
        carouselSlides = computed(() => store.getters.galleryList)

        console.log(carouselSlides);
        
        const exitModal = () => {
            store.dispatch('toggleModal')
        }

        return { carouselSlides, exitModal }
    }
}
</script>



<style lang="scss">

    .modal {  // Chnager un peu le style
        // display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 2;
         display: flex;
        align-items: center;
        justify-content: center;

        .overlay {
            background-color: rgba(0, 0, 0, 0.74);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

        }

        .carousel {
            position: fixed;
            width: 90%;
            height: 90%;
            // top: 5%;
            // right: 0;
            // left: 0;
            top: 5%;
            // bottom: 0;
            display: flex;

            

            .slide-info {
                position: absolute;
                width: 100%;
                height: 100%;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
</style>
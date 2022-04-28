<template lang="fr">
    <div class="modal">
        <CarouselGlobal class='carousel' v-slot="{ currentSlide }">
            <CarouselSlide class="carouselSlide" v-for="(slide, index) in carouselSlides" :key='index'>
                <div v-show="currentSlide === index + 1" class='slide-info'>
                    <img :src="require(`../assets/${slide}.jpg`)" alt="Illustration du projet">
                </div>
            </CarouselSlide>
        </CarouselGlobal>
    </div>
</template>



<script>
import CarouselGlobal from '@/components/carouselModal/CarouselGlobal.vue'
import CarouselSlide from '@/components/carouselModal/CarouselSlide.vue'

export default {
    name: 'ProjectModal',
    components: {
        CarouselGlobal,
        CarouselSlide
    },

    setup() {
        
        const carouselSlides = ['leopard', 'hérisson_starbucks']
        // console.log(carouselSlides);

        return { carouselSlides }
    }
}
</script>



<style lang="scss">

    .modal {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.363);

        .carousel {
            position: absolute;
            width: 100%;
            height: 90%;
            top: 5%;

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
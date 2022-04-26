<template lang="fr">
    <div class="projects">
        
        <div class="title">
            <div class="line"> </div>
            <h2>Projets</h2>
        </div>

        <CarouselGlobal class="carousel" v-slot="{ currentSlide }">
            <CarouselSlide v-for="(slide, index) in carouselSlides" :key='index'>
                <div v-show="currentSlide === index + 1" class='slide-info'>
                    <img :src="require(`../assets/${slide}.jpg`)" alt="Illustration du projet">
                </div>
            </CarouselSlide>
        </CarouselGlobal>

    </div>
</template>


<script>
import CarouselGlobal from '@/components/carousel/CarouselGlobal.vue'
import CarouselSlide from '@/components/carousel/CarouselSlide.vue'

export default {
    // Composition API

    name: "ProjectSection",
    components: {
        CarouselGlobal,
        CarouselSlide
    },

    setup() {
        const carouselSlides = ['hérisson_starbucks', 'leopard']

        return { carouselSlides }
    }
    
}


</script>



<style scoped lang="scss">
    .projects {
        width: 100%;
        padding-bottom: 200px; // ATTENTION //

        .title {
            display: flex;
            align-items: center;
            gap: 20px;
            width: 85%;
            margin: auto;
            justify-content: right;

            h2 {
                font-size: $title-size;
                font-weight: bold;
            }

            .line {
                height: 2px;
                width: 60%;
                background-color: rgb(255, 255, 255);
            }
        }

        .carousel {
            margin: auto;
            width: 900px;
            height: 450px;
            border: solid rgb(255, 255, 255) 5px;
            position: relative;
            

            .slide-info {
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
</style>
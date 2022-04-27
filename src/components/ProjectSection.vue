<template lang="fr">
    <div class="projects">
        
        <div class="title">
            <div class="line"> </div>
            <h2>Projets</h2>
        </div>
        <!-- <Teleport to='.title'> -->
        <CarouselGlobal :class="isActive ? 'modaleMod' : 'carousel'" v-slot:projects="{ currentSlide }">
            <CarouselSlide class="carouselSlide" v-for="(slide, index) in carouselSlides" :key='index'>
                <div v-show="currentSlide === index + 1" class='slide-info'>
                    <img :src="require(`../assets/${slide.images}.jpg`)" alt="Illustration du projet">

                    <a class="boxIcon" href="https://github.fr/">
                        <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                    </a>

                    <div @click="openGallery" class="gallery">
                        <p>Plus d'images</p>  
                    </div>

                    <ul class="langages">
                        <li v-for="langage in slide.langages">{{ langage }}</li>
                    </ul>

                    <div class="description">
                        <h4>{{ slide.name }}</h4>
                        <p> {{ slide.description }} </p>
                    </div>
                </div>
            </CarouselSlide>
        </CarouselGlobal>
        <!-- </Teleport> -->
    </div>
</template>


<script>
import CarouselGlobal from '@/components/carousel/CarouselGlobal.vue'
import CarouselSlide from '@/components/carousel/CarouselSlide.vue'
import { ref  } from '@vue/reactivity'

export default {
    // Composition API

    name: "ProjectSection",
    components: {
        CarouselGlobal,
        CarouselSlide
    },

    setup() {

        
        const carouselSlides = [
            {
                name: 'leopard',
                images: 'leopard',
                description: "Ceci est la description leopard",
                langages: ['html', 'sass', 'vueJs'],
            },

            {
                name: "hérisson starbucks",
                images: 'hérisson_starbucks',
                description: "Ceci est la description herissonCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herissoCeci est la description herisso ",
                langages: ['html', 'css', 'js']
            },

        ]

        let isActive = ref(false)

        const openGallery = () => {
            isActive.value = !isActive.value
            console.log(isActive);
        }

        return { carouselSlides, openGallery, isActive }
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
            margin: 35px auto 0 auto;
            width: 900px;
            height: 600px;
            position: relative;
            @include carousel-middle {
                width: 100%;
            }
            
            .slide-info {
                border: solid rgba(255, 255, 255, 0.719) 2px;
                position: absolute;
                width: 900px;
                top: 0;
                left: 0;
                height: 450px;
                @include carousel-middle {
                    width: 100%;
                    border: none;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .boxIcon {
                    position: absolute;
                    top: 50px;
                    left: 0;
                    padding: 13px;
                    background-color: rgba(0, 0, 0, 0.548);
                    border-radius: 0 8px 8px 0;
                    color: white;

                    .icon {
                        font-size: 20px;
                        transition: font-size 0.5s;
                        
                    }
                    &:hover > .icon {
                        font-size: 30px;

                    }
                }

                .gallery {
                    position: absolute;
                    right: 70px;
                    top: 414px;
                    background-color: rgba(0, 0, 0, 0.486);
                    padding: 8px;
                    border-radius: 8px 8px 0 0;
                    cursor: pointer;

                    p {
                        font-size: 14px;
                        font-weight: bold;
                    }
                }

                .langages {
                    display: flex;
                    gap: 20px;
                    margin-top: 40px;
                    transition: margin 0.5s;
                    @include carousel-middle {
                        margin: 50px 10px 0 10px;
                    }

                    li {
                         background-color: $color-secondary;
                         color: black;
                         border-radius: 20px;
                         padding: 0px 30px 0px 15px;
                         position: relative;
                         height: 23px;
                         display: flex;
                         align-items: center;

                         &::after {
                             content: "";
                             background-color: $color-primary;
                             width: 5px;
                             height: 5px;
                             border-radius: 50%;
                             position: absolute;
                             right: 12px;
                             align-items: center;
                         }
                    }
                }

                .description {
                    margin-top: 35px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h4 {
                        font-size: 24px;
                        font-weight: 600;
                        color: rgb(255, 255, 255);
                    }
                }
            }
        }
    }
</style>
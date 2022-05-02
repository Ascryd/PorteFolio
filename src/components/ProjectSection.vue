<template lang="fr">
    <div class="projects">
        
        <div class="title">
           <div class="line"> </div>
            <h2>Projets</h2>
            <div class="line"> </div>
        </div>
        
        <CarouselGlobal :class="isActive ? 'modaleMod' : 'carousel'" v-slot:projects="{ currentSlide }">
            <CarouselSlide class="carouselSlide" v-for="(slide, index) in carouselSlides" :key='index'>
                <div v-show="currentSlide === index + 1" class='slide-info'>
                    <img :src="require(`../assets/projects_pics/${slide.images[0]}.png`)" alt="Illustration du projet">

                    <div @click="openGallery(slide.images)" class="gallery">
                        <p>Plus d'images</p>  
                        <a :href="slide.github"><font-awesome-icon :icon="['fab', 'github']" class="icon"/></a>
                        <a v-if="slide.link" :href="slide.link"><font-awesome-icon icon="link" class="icon"/></a>
                    </div>

                    <ul class="langages">
                        <li v-for="langage in slide.langages">{{ langage }}</li>
                    </ul>

                    <div class="description">
                        <h4>{{ slide.name }}</h4>
                        <div class="text">
                            <p>{{ slide.presentation}}</p>
                            <p>{{ slide.descriptionPart1 }}</p>
                            <p v-if="slide.descriptionPart2">{{ slide.descriptionPart2 }}</p>
                        </div>
                    </div>
                </div>
            </CarouselSlide>
        </CarouselGlobal>

    </div>
</template>


<script>
import CarouselGlobal from '@/components/carousel/CarouselGlobal.vue'
import CarouselSlide from '@/components/carousel/CarouselSlide.vue'
import { ref  } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    // Composition API

    name: "ProjectSection",
    components: {
        CarouselGlobal,
        CarouselSlide,
    },

    setup() {

        const carouselSlides = [
            {
                _id: 1,
                name: 'Reservia',
                images: ['P2/desktop_top', 'P2/desktop_bottom', 'P2/mobile_top', 'P2/mobile_bottom'],
                presentation: "Ce projet est le second de la formation Développeur Web chez OpenClassrooms.",
                descriptionPart1: "Il a été réalisé avec HTML et CSS, l’objectif était de créer une simple page qui soit responsive.",
                langages: ['HTML', 'CSS'],
                github: 'https://github.com/Ascryd/OC-Projet-2',
                link: 'https://ascryd.github.io/OC-Projet-2/'
            },

            {
                _id: 2,
                name: "OhMyFood",
                images: ['P3/desktop_accueil', 'P3/desktop_menu1', 'P3/desktop_menu2', 'P3/mobile_accueil-top', 'P3/mobile_accueil-list', 'P3/mobile_menu'],
                presentation: "Ce projet est le troisième de la formation Développeur Web chez OpenClassrooms.",
                descriptionPart1: "L’objectif du projet était l’apprentissage du préprocesseur Sass, pour cela il fallait réaliser un site web de 5 pages depuis une maquette et y ajouter des animations.",
                langages: ['HTML', 'Sass'],
                github: 'https://github.com/Ascryd/OC-Projet-3',
                link: 'https://ascryd.github.io/OC-Projet-3/'
            },

            {
                _id: 3,
                name: "La chouette agence",
                images: ['P4/desktop_after', 'P4/desktop_before', 'P4/mobile_after', 'P4/mobile_before'],
                presentation: "Ce projet est le quatrième de la formation Développeur Web chez OpenClassrooms.",
                descriptionPart1: "Ce projet est assez différent des autres, ici l’objectif était d’optimiser le référencement SEO d’un site et de respecter les normes WCAG pour l'accessibilité.",
                descriptionPart2: "OpenClassrooms m’a fourni ce site directement avec de nombreuses erreurs, il fallait trouver 10 erreurs importantes et les corriger pour renforcer le référencement et améliorer l’accessibilité.",
                langages: ['HTML', 'CSS', 'SEO'],
                github: 'https://github.com/Ascryd/OC-Projet-4',
                link: 'https://ascryd.github.io/OC-Projet-4/'
            },

            {
                _id: 4,
                name: "Kanap",
                images: ['P5/desktop_list', 'P5/desktop_product', 'P5/desktop_cart', 'P5/desktop_confirm', 'P5/mobile_product'],
                presentation: "Ce projet est le cinquième de la formation Développeur Web chez OpenClassrooms.",
                descriptionPart1: "Ce projet est le cinquième de la formation Développeur Web chez OpenClassrooms.L’élément principal de celui-ci était l’apprentissage de JavaScript (le back-end et la maquette étant fournis par OC), et l’utilisation des API.",
                descriptionPart2: "Selon moi, il s’agit du projet le plus complexe à réaliser, car il y a un pas considérable à faire entre HTML/CSS et JavaScript avec l'arrivée des fonctions, tableaux, des API etc..",
                langages: ['HTML', 'CSS', 'JavaScript', 'NodeJs'],
                github: 'https://github.com/Ascryd/OC-Projet-5'
            },

            {
                _id: 5,
                name: "Piiquante",
                images: ['P6/desktop_list', 'P6/desktop_connect', 'P6/desktop_add', 'P6/desktop_product', 'P6/mobile_list', 'P6/mobile_add'],
                presentation: "Ce projet est le sixième de la formation Développeur Web chez OpenClassrooms.",
                descriptionPart1: "Ici l’accent était mis sur le Back-end grâce à NodeJs (le front-end étant fourni pas OC), en travaillant sur la circulation et la validation des données, le CRUD, entre l’application et la base de données MongoDB.",
                langages: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'MongoDB'],
                github: 'https://github.com/Ascryd/OC-Projet-6'
            },

            {
                _id: 6,
                name: "Groupomania",
                images: ['P7/desktop_home', 'P7/desktop_connect', 'P7/desktop_register', 'P7/desktop_modal', 'P7/mobile_register', 'P7/mobile_home'],
                presentation: "Ce projet est le septième de la formation Développeur Web chez OpenClassrooms, il s’agit du projet final.",
                descriptionPart1: "La consigne principale était de réaliser un réseau social d’entreprise, rien n’était fourni par l’organisme à part quelques spécifications techniques, comme avoir un forum ou l'on peut poster du texte et du contenu multimédia.",
                descriptionPart2: "J’ai donc réalisé un réseau social assez simple où l'on peut envoyer texte et images, créer ou supprimer un profil ou encore poster des commentaires sous les posts. Toutes les données étaient stockées dans une base de données MySql.",
                langages: ['HTML', 'Sass', 'VueJs', 'NodeJs', 'MySql', 'phpMyAdmin'],
                github: 'https://github.com/Ascryd/OC-Projet-7'
            },
        ]

        let isActive = ref(false)

        const store = useStore()

        const openGallery = (images) => {
            // console.log(images);
            store.dispatch('toggleModal', images)
        }

        return { carouselSlides, openGallery, isActive }
    }
    
}
</script>



<style scoped lang="scss">
    .projects {
        width: 100%;

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            width: 85%;
            margin: auto;
            // justify-content: right;

            h2 {
                font-size: $title-size;
                font-weight: bold;
            }

            .line {
                height: 2px;
                width: 30%;
                background-color: rgb(255, 255, 255);
            }
        }

        .carousel {
            margin: 35px auto 0 auto;
            width: 900px;
            height: 820px;
            position: relative;
            @include carousel-middle {
                width: 100%;
            }
            
            .slide-info {
                // border-top: solid $color-secondary-transparent 2px;
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
                    object-fit: contain;
                }

                .gallery {
                    position: relative;
                    bottom: 37px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    // height: 20px;

                    p {
                        // margin: auto;
                        cursor: pointer;
                        padding: 8px;
                        border-radius: 8px;
                        background-color: rgba(0, 0, 0, 0.486);
                        width: 110px;
                        font-size: 14px;
                        font-weight: bold;

                    }

                    a {
                        
                        .icon {
                            font-size: 16.5px;
                            border-radius: 8px;
                            background-color: rgba(0, 0, 0, 0.548);
                            padding: 8px;
                            color: white;       
                        }                        
                    }

                }

                .langages {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-top: 50px;
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
                    gap: 26px;

                    h4 {
                        font-size: 24px;
                        font-weight: 600;
                        color: rgb(255, 255, 255);
                    }

                    .text {
                        display: flex;
                        flex-direction: column;
                        gap: 11px;
                    }
                }
            }
        }
    }
</style>
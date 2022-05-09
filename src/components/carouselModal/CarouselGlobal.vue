<template lang="fr">
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>

        <div class="navigate">
            <div class="toggle-page left">
                <font-awesome-icon @click="prevSlide" icon="chevron-left" class="icon"/>
            </div>
            <div class="toggle-page right">
                <font-awesome-icon @click="nextSlide" icon="chevron-right" class="icon" />
            </div>
        </div>

        <div class="pagination">
            <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{active : index + 1 === currentSlide}">
            </span>
        </div>

        <div class="btn-close">
            <button @click="exitModal">Revenir au site</button>
        </div>
    </div>
</template>


<script>
import {ref, onMounted} from "vue"
import { useStore } from 'vuex'

export default {
    name: "CarouselGlobal",

    setup() {
        const currentSlide = ref(1)
        const getSlideCount = ref(null)  // Null car au moment de l'initialisation de la variable, on a pas encore le nombre de slides

        // slide suivant
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value) {
                currentSlide.value = 1
                return
            }
            currentSlide.value += 1
        }

        // Slide précédent
        const prevSlide = () => {
            if (currentSlide.value === 1) {
                currentSlide.value = getSlideCount.value
                return
            }
            currentSlide.value -= 1
        }

        // Pagination
        const goToSlide = (index) => {
            currentSlide.value = index + 1
        }

        onMounted(() => {  // Ici on a le nombre de slides
            getSlideCount.value = document.querySelectorAll(".modalSlide").length
        })


        const store = useStore()
        const exitModal = () => {
            store.dispatch('toggleModal')
        }

        return {currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, exitModal}
    }
}
</script>


<style scoped lang="scss">

.navigate {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;
    top: 40%;

    .toggle-page {
        display: flex;
        flex: 1;
    }

    .right {
        justify-content: flex-end;
    }

    .icon {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: $color-secondary-transparent;
        color: black;

        &:hover {
            background-color: $color-secondary;
        }
        
    }
}

.btn-close {
    position: absolute;
    top: -30px;
    display: flex;
    justify-content: center; 
    width: 100%;

    button {
        min-width: 150px; 
        padding: 5px 15px;
        background-color: $color-secondary;
        border: none;
        border-radius: 50px;
        font-size: 15px;
        cursor: pointer;
        font-weight: 600;
    }
}

.pagination {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 16px;
    bottom: -29px;

    span {
        cursor: pointer;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        background-color: white;
    }

    .active {
        background-color: $color-secondary;
    }
}
</style>
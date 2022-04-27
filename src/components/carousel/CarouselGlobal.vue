<template lang="fr">
    <div class="carousel">
        <slot name="projects" :currentSlide="currentSlide"></slot>

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
    </div>
</template>


<script>
import {ref, onMounted} from "vue"

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
            getSlideCount.value = document.querySelectorAll(".slide").length
        })

        return {currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide}
    }

}
</script>


<style lang="scss">
    
.navigate {
    position: absolute;
    top: 225px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    // align-items: center;

    .toggle-page {
        display: flex;
        flex: 1;
        // height: 50px;
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
        width: 20px;
        height: 20px;
        background-color: $color-secondary;
        color: black;
        
    }
}

.pagination {
    position: absolute;
    top: 465px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span {
        cursor: pointer;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: white;
    }

    .active {
        background-color: $color-secondary;
    }
}
</style>
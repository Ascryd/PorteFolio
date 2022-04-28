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
            getSlideCount.value = document.querySelectorAll(".modalSlide").length
        })

        return {currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide}
    }

}
</script>


<style scoped lang="scss">

.navigate {
    position: absolute;
    width: 100%;
    padding: 0 16px;
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

.pagination {
    position: absolute;
    bottom: -30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

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
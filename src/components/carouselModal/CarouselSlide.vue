<template lang="fr">
    <div class="modalSlide">
        <transition name="modalSlide">
            <slot></slot>
        </transition>
    </div>
</template>


<script>
export default {
    name: "CarouselSlide",


    data() {
        return {
            index: 0
        }
    }, 
}
</script>


<style scoped lang="scss">
    
.modalSlide-enter-active,
.modalSlide-leave-active {
    transition: opacity 0.4s ease-in-out;
}

.modalSlide-enter-from,
.modalSlide-leave-to {
    opacity: 0;

}

.modalSlide-enter-to,
.modalSlide-leave-from {
    opacity: 1;
}

</style>
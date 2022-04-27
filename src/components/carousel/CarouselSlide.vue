<template lang="fr">
    <div class="slide">
        <transition name="slide">
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


<style lang="scss">
    
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
}

</style>
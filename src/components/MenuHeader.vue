<template lang="fr">
    <div class="menu">
        <ul>
            <li @click="$emit('toggleMenu')" @click.prevent="$emit('scrollToElement', 'about')"><a href="#">À propos</a></li>
            <li @click="$emit('toggleMenu')" @click.prevent="$emit('scrollToElement', 'skills')"><a href="#">Compétences</a></li>
            <li @click="$emit('toggleMenu')" @click.prevent="$emit('scrollToElement', 'projects')"><a href="#">Projets</a></li>
            <li @click="$emit('toggleMenu')" @click.prevent="$emit('scrollToElement', 'contact')"><a href="#contact">Contact</a></li>
        </ul>
    </div>
</template>


<script>


export default {
    name: "MenuHeader",

    methods: {
        emitScrollToEvent (id) {
            this.$emit('scroll-to-element', id)
            console.log("test");
            console.log(id);
        }
    },
}

</script>


<style lang="scss">

.menu {
    background-color: rgba(255, 255, 255, 0.144);
    position: absolute;
    right: 0;
    width: 100%;
    // height: 250px;
    z-index: 1;
    box-shadow: rgba(70, 70, 70, 0.192) 1px 1px 15px;
    border-radius: 5px 0 0 5px;

    @include nav-responsive-large {
        display: none;
    }

     ul {
         height: 200px;
         margin: 45px 0 15px 0;
         display: flex;
         flex-direction: column;
         gap: 30px;
         text-align: center;

         li {

             a {
                 font-size: 1.2rem;
                 color: white;
                 transition: color 0.3s;

                 &:hover {
                     color: $color-secondary;
                 }
             }
         }
     }
}

</style>
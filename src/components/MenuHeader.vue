<template lang="fr">
    <div class="menu">
        <ul>
        <li class="withBorder"><a href="#">À propos</a></li>
        <li class="withBorder"><a href="#">Compétences</a></li>
        <li class="withBorder"><a href="#">Projets</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
    </div>
</template>


<script>


export default {
    name: "MenuHeader",
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

                 &:hover {
                     color: $color-secondary;
                 }
             }
         }
     }
}

</style>
<template lang="fr">
    <div class="presentation">
        <p>Bonjour 👋 , je suis</p>
        <h1>Cyril Florval,</h1>
        <h2>Développeur Web</h2>
        <p>Je suis principalement tourné vers le front-end, en particulier avec le framework VueJs. <br/>
            Je maîtrise également d'autres languages et technologies, que je présente ci-dessous.    <font-awesome-icon class="icon" icon="arrow-down" /></p>            
    </div>
</template>


<script>
export default {
    name: "PresentSection"
}
</script>


<style lang="scss">
    
    .presentation {
        margin-top: clamp(80px, 25vw, 250px);
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;
        padding:0 15vw 0 15vw;

        p:nth-child(1) {
            font-size: 20px;
        }

        h1 {
            font-size: clamp(31px, 5vw, 55px);
            font-weight: 550;
        }

        h2 {
            font-size: clamp(33px, 5vw, 65px);
            font-weight: 550;
            color: rgba(255, 255, 255, 0.74);
        }

        p:nth-child(4) {
            margin-top: 15px;
            font-size: clamp(20px, 3vw, 22px);
            color: rgba(255, 255, 255, 0.753);
            line-height: 30px;

            .icon {
                color: $color-secondary;
            }
        }
    }

</style>
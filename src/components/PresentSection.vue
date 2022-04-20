<template lang="fr">
    <div class="presentation">
        <p>Bonjour 👋 , je suis</p>
        <h1>Cyril Florval,</h1>
        <h2>Développeur Web</h2>
        <p>Je suis principalement tourné vers le front-end, en particulier avec le framework VueJs, <br/>
            Je maîtrise également d'autres languages et technologies, que je présente ci-dessous.    <font-awesome-icon icon="arrow-down" /></p>            
    </div>
</template>


<script>
export default {
    name: "PresentSection"
}
</script>


<style lang="scss">
    
    .presentation {
        margin: 100px 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;
        padding:0 15vw 0 15vw;

        p:nth-child(1) {
            font-size: 20px;
        }

        h1 {
            font-size: clamp(25px, 3.5vw, 50px);
            font-weight: 550;
        }

        h2 {
            font-size: clamp(25px, 3.5vw, 50px);
            font-weight: 550;
            color: rgba(255, 255, 255, 0.74);
        }

        p:nth-child(4) {
            margin-top: 15px;
            font-size: 20px;
            color: rgba(255, 255, 255, 0.753);
            line-height: 30px;
        }

    }
</style>
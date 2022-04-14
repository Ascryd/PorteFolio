<template lang="fr">
    <section class="about">

        <div class="title">
            <h2>À propos</h2>
            <div class="line"> </div>
        </div>

        <div class="content">
            <div class="informations">
                <p>Bonjour !</p>

            </div>

            <div class="photo">
                <img src="../assets/logo.png" alt="Ma photo">
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "AboutSection"
}

</script>


<style scoped lang="scss">

.about {
    padding-top: 150px;
    // background-color: rgb(141, 0, 0);
    display: flex;
    flex-direction: column;
    gap: 30px;

    .title {
        width: 85%;
        margin: auto;
        display: flex;
        align-items: center;
        gap: 20px;


        h2 {
            min-width: 155px;
            font-size: 30px;
            
        }

        .line {
            height: 2px;
            width: 60%;
            background-color: rgb(255, 255, 255);
            
        }
    }

    .content {
        display: flex;
        margin: auto;
        width: 60%;
        // background-color: rgb(117, 0, 0);
        margin-left: 19%;
        display: flex;
        justify-content: space-around;
        

        .informations {
            width: 500px;
            background-color: rgb(160, 0, 0);
        }

        .photo {
            margin: 0 10px 0 10px;
        }
        
    }
}
    
</style>
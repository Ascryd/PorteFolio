<template lang="fr">
    <section class="about">

        <div class="title">
            <h2>À propos</h2>
            <div class="line"> </div>
        </div>

        <div class="content">
            <div class="informations">
                <p> 
                    Bonjour, je m’appelle Cyril et j’ai découvert le développement web début 2021, après avoir travaillé dans l’immobilier, l’éducation ou encore à l’usine, j’ai enfin trouvé ma voie dans la création de site web, c’est un métier qui demande de la créativité, de l’organisation et surtout de la débrouillardise, bref, tout ce que j’aime !
                </p>
                <p> 
                    J’ai donc commencé à apprendre le HTML/CSS avant de commencer une formation intense de Développeur Web chez OpenClassrooms, ou j’ai dû réaliser des projets de plus en plus complets pour apprendre et améliorer mes compétences.
                </p>
                <p> 
                    Aujourd’hui, j’ai terminé cette formation et je réalise des projets personnels pour m’améliorer toujours plus dans ce domaine en attendant de pouvoir intégrer une entreprise pour me professionnaliser et continuer cette aventure.
                </p>

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
    padding-top: 200px;
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
        justify-content: center;
        gap: 30px;
        margin: auto;
        padding: 0 30px;
        @include about-wrap;
        

        .informations {
            min-width: 250px;
            max-width: 750px;
            // background-color: rgb(160, 0, 0);
            display: flex;
            flex-direction: column;
            gap: 25px;

            p {
                font-size: 17px;
                color: rgb(216, 216, 216);
            }
        }

        .photo {
            margin: 0 10px 0 10px;
        }
    }
}
    
</style>
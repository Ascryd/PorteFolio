<template lang="fr">
    <div id="contact" class="contactSection">

        

        <div class="contact">

            <h2 class="title">Contact</h2>

            <div class="text">
                    <p>Je suis actuellement à la recherche d’un poste ou d’une mission de développeur web Front-end, principalement en VueJs. Si mon profil vous intéresse ou si vous avez des questions, n'hésitez pas à me contacter sur Linkedin ou par mail.</p>
                    <p></p>
            </div>

            <div class="liens">
                <a href="https://github.com/Ascryd"><font-awesome-icon :icon="['fab', 'github']" class="icon"/></a>
                <a href="https://www.linkedin.com/in/cyril-florval-480598228/"><font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/></a>
                <a href="mailto:cyrilflorval@gmail.com"><font-awesome-icon icon="envelope" class="icon"/></a>
            </div>
        </div>



    </div>
</template>



<script>
export default {
    name: "ContactSection"
}
</script>



<style scoped lang="scss">

.contactSection {

    .contact {
        max-width: 700px;
        height: 550px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 70px;
        border: solid white 2px;

        .title {
            font-size: $title-size;
            font-weight: bold;
            background-color: $color-primary;
            // padding-bottom: 70px 
        } 

        .text {
            display: flex;
            flex-direction: column;
            // gap: 80px;
            max-width: 450px;

            p {
                font-size: 23px;
            }
        }

        .liens {
            display: flex;
            // gap: 80px;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            max-width: 450px;

            a {
                color: $color-secondary;
                font-size: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                transition: all 0.5s;

                &:nth-child(1):hover {
                    color: white;
                }

                &:nth-child(2) {
                    height: 39px;
                    width: 34px;
                    border-radius: 5px;

                    &:hover {
                        background-color: white;
                        color: rgb(0, 102, 255);
                    }
                }

                &:nth-child(3) {
                    height: 33px;
                    width: 49px;
                    border-radius: 5px;

                     &:hover {
                        color: rgb(0, 162, 255);
                    }
                }
            }
        }
    }
}
    
</style>
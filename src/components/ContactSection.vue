<template lang="fr">
    <div class="contactSection">

        <div class="title">
            <div class="line"> </div>
            <h2>Contact</h2>
            <div class="line"> </div>
        </div>

        <div class="contact">

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
    display: flex;
    flex-direction: column;
    gap: 80px;

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        // background-color: green;
        gap: 20px;

        h2 {
            font-size: $title-size;
            font-weight: bold;
        }

        .line {
            height: 2px;
            width: 40%;
            background-color: rgb(255, 255, 255);
        }
    }

    .contact {
        max-width: 450px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 35px;

        .text {
            display: flex;
            flex-direction: column;
            gap: 25px;
            // margin: auto;

            p {
                font-size: 23px;
            }
        }

        .liens {
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: space-around;

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
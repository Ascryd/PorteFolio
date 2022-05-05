<template lang="fr">
    <div id="skills" class="skills">

        <div class="title">
            <div class="line"> </div>
            <h2>Compétences</h2>
            <div class="line"> </div>
        </div>

        <div class="content">
            <div class="list">
                <h3>Front-end</h3>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Sass</li>
                    <li>Javescript</li>
                    <li>VueJs</li>
                </ul>
            </div>

            <div class="list">
                <h3>Back-end</h3>
                <ul>
                    <li>NodeJs</li>
                    <li>Npm</li>
                </ul>
            </div>

            <div class="list">
                <h3>Base de données</h3>
                <ul>
                    <li>MySql</li>
                    <li>MongoDB</li>
                </ul>
            </div>

            <div class="list">
                <h3>Technologies diverses</h3>
                <ul>
                    <li>Git</li>
                    <li>GitKraken</li>
                    <li>phpMyAdmin</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SkillsSection"
}
</script>


<style lang="scss">
    
.skills {
    width: 100%;

    .title {
        @include title-format;
        width: 85%;

        .line {
            width: 35%;
        }
    }

    .content {
        margin-top: 20px;
        display: flex;
        gap: 35px;
        justify-content: center;
        flex-wrap: wrap;

        .list {
            margin-bottom: 40px;
            
            h3 {
                margin-bottom: 10px;
                font-size: clamp(18px, 3vw, 22px);;
            }
            
            ul {
                display: flex;
                flex-direction: column;
                gap: 5px;
                margin: auto;
                width: clamp(200px, 15vw, 230px);;
    
                li {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: solid grey 1px;
                    transition: all 0.3s ;

                    &:hover {
                        background: $color-secondary-gradient;
                    }
                }
            }
        }

    }
}

</style>
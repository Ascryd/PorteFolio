<template lang="fr">
    <div class="skills">

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
    margin-top: 200px;

    .title {
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: auto;

        h2 {
            font-size: $title-size;
            font-weight: bold;
        }

        .line {
            height: 2px;
            width: 35%;
            background-color: rgb(255, 255, 255);
        }
    }

    .content {
        margin-top: 20px;
        padding-bottom: 200px;  // ATTENTION //
        display: flex;
        gap: 35px;
        justify-content: center;
        flex-wrap: wrap;

        .list {
            margin-bottom: 40px;
            
            h3 {
                margin-bottom: 10px;
                font-size: 18px;
            }
            
            ul {
                display: flex;
                flex-direction: column;
                gap: 5px;
                margin: auto;
                width: 200px;
    
                li {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: solid grey 1px;
                    transition: all 0.3s ;

                    &:hover {
                        background-color: $color-secondary;
                    }
                }
            }
        }

    }
}

</style>
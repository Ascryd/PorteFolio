<template>
  <div class="header">
      <img src="../assets/logo.png" alt="Logo de l'entreprise">
      <nav>
        <ul>
          <li class="withBorder">À propos</li>
          <li class="withBorder">Compétences</li>
          <li class="withBorder">Projets</li>
          <li>Contact</li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 30px;
  align-items: center;
  // background-color: red;

  img {
    width: 60px;
    // height: 60px;
    // padding-left: 10px;
  }

  ul {
    display: flex;
    // gap: 30px;
    font-size: 1.05rem;
    list-style: none;

    li {
      padding: 0 20px 0 20px;
      border: rgb(44, 24, 70) solid 1px;
      
      &:hover {
        border: rgb(255, 255, 255) solid 1px;
      }
    }

    .withBorder {
      border-right: solid white 1px;
    }
  }
}
</style>

<template>
  <div class="header">
      <img src="../assets/logo.png" alt="Logo de l'entreprise">
      <nav>
        <ul>
          <li class="withBorder"><a href="#">À propos</a></li>
          <li class="withBorder"><a href="#">Compétences</a></li>
          <li class="withBorder"><a href="#">Projets</a></li>
          <li><a href="#">Contact</a></li>
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

  img {
    width: 60px;
  }

  ul {
    display: flex;
    font-size: 1.05rem;
    list-style: none;

    li {
      padding: 0 20px 0 20px;

      a {
        color: white;
        transition: all 300ms;

        &:hover {
          color: $color-secondary;
        }
      }
    }

    .withBorder {
      border-right: solid white 1px;

    }
  }
}
</style>

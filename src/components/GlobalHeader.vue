<template>
  <transition name="slideMenu">
    <MenuHeader @toggle-menu="toggleMenu" @scroll-to-element="scrollToElement" v-show="menu" />
  </transition>
  <header class="header">
      <img src="../assets/logo.png" alt="Logo de l'entreprise">
      <nav>
        <ul>
          <li @click.prevent="scrollToElement('about')" class="withBorder"><a href="#">À propos</a></li>
          <li @click.prevent="scrollToElement('skills')" class="withBorder"><a href="#">Compétences</a></li>
          <li @click.prevent="scrollToElement('projects')" class="withBorder"><a href="#/contact">Projets</a></li>
          <li @click.prevent="scrollToElement('contact')"><a href="#">Contact</a></li>
        </ul>
        
        <div class="menuToggle">
          <input @click="menu = !menu" class="cross" type="checkbox">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </nav>
  </header>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue'

export default {
  // Option API

  name: 'GlobalHeader',
  components: {
    MenuHeader,
  },

  data() {
    return {
      menu: false
    }
  },

  methods: {
    scrollToElement (id) {
      let elementToScroll = document.getElementById(id)
      console.log(elementToScroll);
      console.log(id);
      elementToScroll.scrollIntoView({ behavior: 'smooth' })
    },

    toggleMenu () {
      this.menu = !this.menu
      document.querySelector(".cross").checked = false
    }
  },

}
</script>

<style scoped lang="scss">

.slideMenu-enter-active, .slideMenu-leave-active {
  transition: all 0.5s ease;
}

.slideMenu-leave-to, .slideMenu-enter-from {
  transform: translateY(-290px);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 30px;
  align-items: center;
  

  img {
    width: 60px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 15px;
    
    ul {
      display: flex;
      font-size: 1.05rem;
      list-style: none;
      height: 20px;
      @include nav-responsive-small {
        display: none;
      }
  
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

    .menuToggle {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      user-select: none;
      @include nav-responsive-large {
        display: none;
      }

      input {
        display: flex;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -10px;
        left: 10px;
        cursor: pointer;
        opacity: 0;
        z-index: 2;

        &:checked ~ span {
          opacity: 1;
          transform: rotate(45deg) translate(-3px, -1px);
        }

        &:checked ~ span:nth-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        &:checked ~ span:nth-child(4) {
          transform: rotate(-45deg) translate(0, -1px);
        }


      }

      span {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        top: 2px;
        right: -20px;
        background: #ffffff;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;

        &:nth-child(4) {
          transform-origin: 0% 100%;
        }
      }
    }
  }
}
</style>

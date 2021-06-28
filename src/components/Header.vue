<template>
  <header>
    <nav class="container">
      <a href="/"
        ><img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="WDEV"
      /></a>
      <img
        v-on:click="openMenu"
        class="menu_button"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
        alt="menu-mobile"
      />
      <div v-on:click="closeMenu" v-if="menuAtivo" class="overlay"></div>
      <div class="men_itens" :class="{ active: menuAtivo }">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="WDEV"
        />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/videos">Video</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuAtivo: false,
    };
  },
  methods: {
    openMenu: function() {
      this.menuAtivo = true;
    },
    closeMenu: function() {
      this.menuAtivo = false;
    },
  },
};
</script>
<style scoped lang="scss">
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .menu_button {
    width: 30px;
    cursor: pointer;
  }
  img {
    width: 130px;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
}
.men_itens {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &.active {
    display: flex;
  }
  img {
    width: 110px;
    margin: 30px 0 10px 0;
  }
  ul {
    text-align: center;
    li {
      margin: 20px 0;
    }
    list-style: none;
    a {
      color: var(--color-text-light);
    }
  }
}
@media (min-width: 700px) {
  .menu_button,
  .overlay,
  .men_itens img {
    display: none;
  }
  .men_itens {
    display: flex;
    position: static;
    height: 100%;
    width: auto;
    justify-content: center;
    ul {
      display: flex;
      width: 300px;
      justify-content: space-between;
      li {
        margin: 0;
      }
    }
  }
}
</style>

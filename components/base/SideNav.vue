
<template>
  <div class="component-SideNav" :data-show-nav="getMenuToggle">
    <div @click="navToggle" id="alloy-nav-toggle">
      <div class="inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <aside class="alloy-slide-nav" @click="closeToggle">
      <div class="inner">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">Start</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/submit">Voeg een tic toe!</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/alle-tics">Bekijk alle tics</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/mijn-tics">Mijn tics</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/over">Over</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </nav>
        <CallToAction/>
      </div>
    </aside>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

import CallToAction from "@/components/base/CallToAction.vue";

export default {
  // props: ['item'],
  name: "SlideNav",
  components: {
    CallToAction
  },
  data() {
    return {};
  }, // End data
  computed: {
    // ...mapGetters({
    //   getMenuToggle: "interface/getMenuToggle"
    // })
    getMenuToggle() {
      return this.$store.getters["interface/getState"]("menuToggle");
    }
  },
  methods: {
    navToggle() {
      this.$store.commit({
        type: "interface/setStateSwitch",
        key: "menuToggle"
      });
      // this.$store.commit("interface/setMenuToggle");
    },
    closeToggle() {
      this.$store.commit({
        type: "interface/setStateSwitch",
        key: "menuToggle"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.alloy-slide-nav {
  background-color: $brand-dark;
  padding: $base-margin * 2;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 400px;
  max-width: 100%;
  transform: translateX(400px);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 30px;
  z-index: 3000;

  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;
  overflow-y: auto;
  height: 100%;
  nav {
    margin-top: $base-margin * 2;
    margin-bottom: $base-margin * 2;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    a {
      font-size: 22px;
      line-height: 1.4em;
      display: block;
      color: $brand-light;
      text-decoration: none;
      padding-bottom: 25px;
      font-weight: 600;

      &:hover {
      }
    }
  }
}
#alloy-nav-toggle {
  position: fixed;
  top: 75vh;
  opacity: 0.4;

  @include media-breakpoint-up(lg) {
    top: 0;
    opacity: 1;
  }
  right: 0;
  z-index: 4000;
  background-color: $brand-one;

  width: 60px;
  height: 52px;
  transform: rotate(0deg);
  cursor: pointer;
  padding: $base-margin;
  // Transiton
  transition: transform, opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  &:hover {
    opacity: 1;
  }
  .inner {
    position: relative;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $brand-dark;
    border-radius: 0;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 10px;
    }

    &:nth-child(4) {
      top: 20px;
    }
  }

  &.show {
  }
}

[data-show-nav="true"] {
  .alloy-slide-nav {
    transform: translateX(0);
    opacity: 1;
  }
  #alloy-nav-toggle {
    background-color: $brand-dark;
    span {
      background-color: $brand-one;
      &:nth-child(1) {
        top: 10px;
        width: 0;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 18px;
        width: 0;
        left: 50%;
      }
    }
  }
}
</style>

<style lang="scss">
.component-SideNav {
  .alloy-cards {
    font-size: 18px;
    line-height: 1.4em;
  }
}
</style>

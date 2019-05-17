
<template>
  <div class="component-CallToAction" :data-show-nav="show">
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
              <nuxt-link to="/">home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
          </ul>
        </nav>
        <CallToAction/>
      </div>
    </aside>
  </div>
</template>

<script>
import CallToAction from "@/components/base/CallToAction.vue";

export default {
  // props: ['item'],
  name: "SlideNav",
  components: {
    CallToAction
  },
  data() {
    return {
      title: "SlideNav",
      show: false
    };
  }, // End data
  methods: {
    navToggle() {
      this.show = !this.show;
    },
    closeToggle() {
      this.show = !this.show;
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

  opacity: 0;
  transform: translateX(100%);
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;
  overflow-y: auto;
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: $brand-light;
    text-decoration: none;
  }
}
#alloy-nav-toggle {
  position: fixed;
  top: 45vh;
  opacity: 0.4;

  @include media-breakpoint-up(lg) {
    top: 15vh;
    opacity: 1;
  }
  right: 0;
  z-index: 4000;
  background-color: $brand-dark;

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
    background: $brand-light;
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
    span {
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
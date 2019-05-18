<template>
  <footer>
    <div class="inner">
      <div class="column">
        <CallToAction/>
      </div>
      <div class="column">
        <h3>Road map</h3>
        <p>Projects are never done! Therefore you’ll get to peek behind the scenes. This is my todo list:</p>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">{{ todo.name }}</li>
        </ul>
        <h4>Want to help?</h4>
        <p>Are you a Vue.js/Nuxt or Javascript developer?</p>
        <nuxt-link to="/contact" class="btn btn--small">Shoot me a message</nuxt-link>

        <h4>Deze website word open source ontwikkeld op Github</h4>
        <p>Wil je een kijkje nemen in de code? Bekijk dan de Github repository.</p>
        <a href="https://github.com/mvaneijgen/mijn-tic-en-ik" class="btn btn--small">Github repo</a>
      </div>
      <div class="column">
        <h3>Over</h3>
        <div v-html="this.$store.state.default.about_text"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import CallToAction from "@/components/base/CallToAction.vue";

export default {
  name: "Footer",
  components: {
    CallToAction
  },
  data() {
    return {
      todos: this.$store.state.default.todos
    };
  } // End data
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
footer {
  padding-top: $base-margin * 2;
  padding-bottom: $base-margin * 2;
  padding-left: $base-margin;
  padding-right: $base-margin;
  @include media-breakpoint-up(lg) {
    padding-top: $base-margin * 4;
    padding-bottom: $base-margin * 4;
  }
  font-size: 16px;
  line-height: 1.4em;
  width: 100%;
  // height: 400px;
  background-color: darken($brand-one, 10%);
  // color: $brand-light;
  .column {
    margin-bottom: $base-margin * 2;
  }
  @include media-breakpoint-up(lg) {
    position: fixed;
    bottom: 0;
    left: 0;
    .inner {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      > * {
        flex-grow: 1;
        flex-basis: 0;
        padding: $base-margin;
      }
    }
  }
}
</style>
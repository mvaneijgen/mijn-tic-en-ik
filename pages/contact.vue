<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <h2>About this site</h2>
        <div v-html="this.$store.state.default.about_text"></div>
        <blockquote>
          <p>This is awesome! Kinda like PC Part Picker except for longboards.</p>
          <cite>— JBizzy</cite>
        </blockquote>
        <h2>Why is this site made?</h2>
        <p>There are multiple reasons, but to name a few</p>
        <ul>
          <li>I'd found it should be easier to get feedback on your setup, so that when you are ready to upgrade you can get the right new item!</li>
          <li>I wanted to learn Vue.js a Javascript frame work and this is my first real world project!</li>
          <li>Doesn't it look awesome? Why would you even question awesome things like this!</li>
        </ul>
        <ToolsUsed/>
        <h2>Why can I only select decks, tucks and wheels? Where are my brackets, split duros!</h2>
        <p>
          Because getting the content for only these parts was a nightmare. I've contacted several vendors and brands, but only a few responded to my messages. This mean I needed to gather all the products by hand. Over the past half year I've imported 2000+ products, but this is far from a complete set. If you want to help
          <nuxt-link to="/submit">be sure to submit a product</nuxt-link>.
          Or if you are a vendor and want to bulk import your product,
          <nuxt-link to="/submit">be sure to let me know</nuxt-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ToolsUsed from "@/components/base/ToolsUsed.vue";

export default {
  // transition: "page-alt",
  components: {
    ToolsUsed
  },
  data() {
    return {};
  }
};
</script>

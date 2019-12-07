<template>
  <div>
    <div class="container" :data-show-nav="getMenuToggle" :data-bubble-active="getActiveBubble">
      <main>
        <!-- <transition name="fade" mode="out-in"> -->
        <nuxt />
        <!-- </transition> -->
        <CallToActionBubble />
        <Logo />
      </main>
      <Footer />
    </div>
    <SideNav />
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

import SideNav from "~/components/base/SideNav.vue";
import Footer from "@/components/base/Footer.vue";
import Logo from "~/components/interface/Logo.vue";
import CallToActionBubble from "~/components/interface/CallToActionBubble.vue";

export default {
  head() {
    return {
      bodyAttrs: {
        id: `page-${this.$route.name}`,
      },
    };
  },
  data() {
    return {};
  },

  components: {
    SideNav,
    Footer,
    CallToActionBubble,
    Logo,
  },
  computed: {
    // ...mapGetters({
    //   getMenuToggle: "interface/getMenuToggle"
    // })
    getMenuToggle() {
      return this.$store.getters["interface/getState"]("menuToggle");
    },
    getActiveBubble() {
      return this.$store.getters["interface/getState"]("activeBubble");
    },
  },
};
</script>
<template>
  <div>
    <div class="container-full" :data-show-nav="getMenuToggle">
      <main>
        <!-- <transition name="fade" mode="out-in"> -->
        <nuxt />
        <!-- </transition> -->
        <!-- <CallToActionBubble /> -->
        <!-- <SubmitBubble /> -->
        <SubmitBubble v-if="'submit' != this.$route.name" />
        <BackBubble v-else />

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
// import CallToActionBubble from "~/components/interface/CallToActionBubble.vue";
import SubmitBubble from "~/components/interface/SubmitBubble.vue";
import BackBubble from "~/components/interface/BackBubble.vue";

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
    // CallToActionBubble,
    SubmitBubble,
    BackBubble,
    Logo,
  },
  computed: {
    // ...mapGetters({
    //   getMenuToggle: "interface/getMenuToggle"
    // })
    getMenuToggle() {
      return this.$store.getters["interface/getState"]("menuToggle");
    },
    // getActiveBubble() {
    //   return this.$store.getters["interface/getState"]("activeBubble");
    // },
  },
  mounted() {},
};
</script>
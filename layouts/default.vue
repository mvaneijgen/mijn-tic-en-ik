<template>
  <div>
    <div class="container" :data-show-nav="getMenuToggle">
      <main>
        <!-- <transition name="fade" mode="out-in"> -->
        <nuxt/>
        <!-- </transition> -->

        <Logo/>
      </main>
      <Footer/>
    </div>
    <SideNav/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SideNav from "~/components/base/SideNav.vue";
import Footer from "@/components/base/Footer.vue";
import Logo from "~/components/interface/Logo.vue";

export default {
  data() {
    return {};
  },
  components: {
    SideNav,
    Footer,
    Logo
  },
  computed: {
    ...mapGetters({
      getMenuToggle: "interface/getMenuToggle"
    })
  }
};
</script>
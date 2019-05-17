<template>
  <div>
    <nuxt/>
    <SideNav/>
    <Logo/>
  </div>
</template>

<script>
import SideNav from "~/components/base/SideNav.vue";
import Logo from "~/components/interface/Logo.vue";

export default {
  data() {
    return {};
  },
  components: {
    SideNav,
    Logo
  }
};
</script>
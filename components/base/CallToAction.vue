<template>
  <div class="component-CallToAction">
    <div
      v-for="(cta, index) in callToActions"
      :key="index"
      class="alloy-cards cta"
      :data-cta-type="cta.type"
    >
      <div class="inner">
        <p>
          <strong>{{ cta.title }}</strong>
          <span>{{ cta.description }}</span>
        </p>
        <div class="btn-group">
          <nuxt-link :to="cta.url" class="btn btn--small">{{ cta.cta }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "CallToAction",
  data() {
    return {
      title: "CallToAction",
      callToActions: this.$store.state.default.callToActions
    };
  } // End data
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-CallToAction {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @include media-breakpoint-down(sm) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  grid-column-gap: $base-margin;
  grid-row-gap: $base-margin;
}
.alloy-cards {
  &.cta {
    background-color: $brand-dark;
    margin-bottom: $base-margin;
    color: $brand-light;
    > .inner {
      padding: $base-margin;
      // p {
      //   margin-bottom: 0;
      // }
    }
    strong {
      display: block;
    }
    .btn-group {
      text-align: right;
    }
    .btn {
      display: inline-block;
      background-color: lighten($brand-dark, 15%);
      border-color: lighten($brand-dark, 15%);
    }
  }
  &[data-cta-type="cta--alt"] {
    background-color: $brand-two;
    .btn {
      background-color: darken($brand-two, 10%);
      border-color: darken($brand-two, 10%);
    }
  }
}
</style>

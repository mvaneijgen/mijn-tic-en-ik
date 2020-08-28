<template>
  <div class="TicSumbit">
    <div class="inner">
      <form action>
        <div class="input-group">
          <textarea ref="inputSubmit" placeholder="Vertel mij je tics" cols="30" rows="2"></textarea>
        </div>
        <div class="btn-group">
          <input type="submit" value="Verstuur">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicSumbit",
  data() {
    return {};
  }, // End data
  mounted() {
    this.$refs.inputSubmit.focus();
    this.$store.commit({
      type: "interface/setStateSwitch",
      key: "bubbleToggle",
      value: true,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.TicSumbit {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
form {
  textarea {
    font-size: 28px;
    line-height: 1.3em;
    font-weight: 600;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: $base-margin * 2;
    border-color: $brand-light;

    max-width: $container;
    @include media-breakpoint-up(lg) {
      font-size: 42px;
      margin-bottom: $base-margin * 3;
    }
    color: $brand-light;

    &::-webkit-input-placeholder {
      color: $brand-light;
    }
    &::-moz-placeholder {
      color: $brand-light;
    } /* Firefox 19+ */
    &:-moz-placeholder {
      color: $brand-light;
    } /* Firefox 18- */
    &:-ms-input-placeholder {
      color: $brand-light;
    }
  }
  .btn-group {
    text-align: right;
    * {
      color: $brand-dark;
      background-color: $brand-one;
      border-color: $brand-one;
    }
  }
}
::-webkit-input-placeholder,
::-moz-placeholder,
:-moz-placeholder,
:-ms-input-placeholder {
  color: $brand-light;
}
</style>
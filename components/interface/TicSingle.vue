<template>
  <div class="TicSingle">
    <div class="inner">
      <blockquote>{{item.title}}</blockquote>
      <div class="meta">
        <span>{{item.share}} mensen delen deze tic</span>
        <button>Dit doe ik ook!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "TicSingle",
  data() {
    return {};
  } // End data
};
</script>

<style lang="scss" scoped>
// @import '~/assets/css/common/_variables.scss';
.TicSingle {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meta {
  text-align: right;
  font-weight: 600;
}
</style>
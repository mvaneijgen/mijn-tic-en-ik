<template>
  <div class="container">
    <form action="" @submit.prevent="">

      <div class="input-group">
        <label for="search">Zoeken</label>
        <input type="text" name="zoeken" id="search" v-model="search">
      </div>

      <div class="input-group">
        <label for="sort">Sorteer</label>
        <select name="" id="sort" v-model="sort">
          <option selected value="">Sorteer tics</option>
          <option value="popular">Populair</option>
          <option value="unpopular">Minst populair</option>
          <option value="new">Nieuw</option>
          <option value="old">Oud</option>
        </select>
      </div>

      <input type="submit" value="Zoek">

    </form>
    <div class="centered">
      <h1 v-if="search">Zoeken naar <span>{{search}}</span>, <span>{{getFilteredItems.length}}</span> tic(s) gevonden.</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapGetters({
      getFilteredItems: "items/getFilteredItems",
    }),
    search: {
      get() {
        return this.$store.state.items.search;
      },
      set(value) {
        this.$store.commit("items/setSearch", value);
      },
    },
    sort: {
      get() {
        return this.$store.state.items.sort;
      },
      set(value) {
        this.$store.commit("items/setSort", value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.container {
  width: $container;
  margin-left: auto;
  margin-right: auto;
}
form {
  display: flex;
  justify-content: space-between;
  padding-top: $base-margin * 3;
  padding-bottom: $base-margin * 3;
  > * {
    width: 32%;
  }
  select,
  input {
    width: 100%;
  }
  [type="submit"] {
    max-width: 200px;
  }
}
h1 {
  font-size: 24px;
  font-weight: 400;
  span {
    font-weight: 700;
  }
}
</style>
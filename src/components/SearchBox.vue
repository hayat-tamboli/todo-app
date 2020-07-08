<template>
  <div>
    <label for="search">
      <button @click="openSearch = !openSearch">
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </label>
    <input
      type="text"
      id="search-input"
      name="search"
      @blur="openSearch = false"
      @keyup.enter="openSearch = false"
      :class="{ 'open-search': openSearch }"
      placeholder="search..."
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      openSearch: false
    };
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 0;
}
button {
  background: none;
  border: none;
  outline: none;
}
#search-input {
  outline: none;
  border: none;
  border-bottom: thick solid #e3e3e3;
  font-size: 1.5rem;
  &:focus {
    border-bottom: thick solid #83deff;
  }
  transition: all 0.5s;
}
.open-search {
  width: 9rem;
}
</style>

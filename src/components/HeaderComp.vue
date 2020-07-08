<template>
  <div id="header">
    <button @click="$emit('side_menu_toggle')">
      <v-icon class="icon" name="bars" v-if="!SideMenuProp" scale="2" />
      <v-icon name="times" class="icon" v-else scale="2" />
    </button>
    <h1>Minimal Todo App</h1>
    <div>
      <!--<SearchBox></SearchBox>-->
    </div>
  </div>
</template>

<script>
//import SearchBox from "./SearchBox";
export default {
  name: "HeaderComp",
  props: {
    SideMenuProp: Boolean
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  button {
    background: none;
    border: none;
    outline: none;
  }
}
</style>

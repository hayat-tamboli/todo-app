<template>
  <div class="side-menu">
    <div>
      <span>darkmode:</span>
      <v-icon
        name="regular/moon"
        v-if="!DarkModeProp"
        class="icon"
        scale="2"
        @click="$emit('dark-mode')"
      />
      <v-icon
        name="moon"
        class="icon"
        scale="2"
        @click="$emit('dark-mode')"
        v-else
      />
    </div>
    <div class="footer">
      <div>
        <span>contribute:</span>
        <a href="https://github.com/hayat-tamboli/todo-app">
          <v-icon
            name="brands/github"
            label="Forked Repository"
            scale="2"
            class="icon"
          />
        </a>
      </div>
      <p>
        <a
          href="https://raw.githubusercontent.com/hayat-tamboli/todo-app/master/LICENSE"
          style="color: #00ADB5;"
          >&copy; 2020</a
        >
      </p>
      <p>
        <a href="https://hayattamboli.vercel.app" style="color: #00ADB5;"
          >Hayat Tamboli</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    DarkModeProp: Boolean
  }
};
</script>

<style lang="scss" scoped>
.side-menu {
  font-size: 1.5rem;
  position: absolute;
  background: #dedede;
  top: 10vh;
  left: 0;
  z-index: +10;
  height: 90vh;
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .footer {
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    outline: none;
    border: none;
    padding: 0;
  }
}
</style>

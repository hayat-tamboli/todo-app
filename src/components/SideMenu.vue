<template>
  <div class="side-menu">
    <div>
      <span>darkmode:</span>
      <button @click="$emit('dark-mode')">
        <v-icon
          name="regular/moon"
          v-if="!DarkModeProp"
          class="icon"
          scale="2"
        />
        <v-icon name="moon" class="icon" scale="2" v-else />
      </button>
    </div>
    <div class="footer">
      <div>
        <span>contribute:</span>
        <button>
          <a href="https://github.com/hayat-tamboli/todo-app">
            <v-icon
              name="brands/github"
              label="Forked Repository"
              scale="2"
              class="icon"
            />
          </a>
        </button>
      </div>
      <p>
        <a
          href="https://raw.githubusercontent.com/hayat-tamboli/todo-app/master/LICENSE"
          style="color: #2257EA;"
          >&copy; 2020</a
        >
      </p>
      <p>
        <a href="https://hayattamboli.vercel.app" style="color: #2257EA;"
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
  background: rgb(222, 222, 222);
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
    border-radius: 2rem;
    background: #333333;
    color: white;
    padding: 0.2rem;
    margin: 0.2rem;
  }
}
</style>

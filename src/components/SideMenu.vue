<template>
  <div class="side-menu">
    <div>
      <span>darkmode:</span>
      <button @click="$emit('dark_mode')">
        <i class="far fa-moon" v-if="!DarkModeProp"></i>
        <i class="fas fa-moon" v-else></i>
      </button>
    </div>
    <div class="footer">
      <div>
        <span>github:</span>
        <button>
          <a href="https://github.com/hayat-tamboli/"
            ><i class="fab fa-github"></i
          ></a>
        </button>
      </div>
      <div>
        <span>made by:</span
        ><a
          href="https://www.linkedin.com/in/hayat-tamboli/"
          style="color: #83deff;"
          >Hayat Tamboli</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    DarkModeProp: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  position: absolute;
  background: white;
  top: 10vh;
  left: 0;
  z-index: +10;
  height: 90vh;
  padding: 2rem 0.5rem;
  border-right: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .footer{
      flex-direction: column;
  }
  button {
    outline: none;
    border: none;
    border-radius: 2rem;
    background: #000000;
    color: white;
    padding: 0.5rem;
  }
}
</style>

<template>
  <div id="app" :class="{dark: darkMode}">
    <HeaderComp
    :SideMenuProp="sideMenu"
    @side_menu_toggle="sideMenu=!sideMenu"
    ></HeaderComp>
    <transition name="slide">
      <SideMenu
        v-show="sideMenu"
        :DarkModeProp="darkMode"
        @dark_mode="darkMode=!darkMode"
      ></SideMenu>
    </transition>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp";
import SideMenu from "./components/SideMenu"
export default {
  name: 'App',
  components: {
    HeaderComp,
    SideMenu
  },
  data() {
    return {
      darkMode:false,
      sideMenu:false
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
:root{
  font-family: 'Jost', sans-serif;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.dark{
  background: #122222;
  color: white;
  .far,.fa,.fas{
    color: white;
  }
}
#app{
  width: 100%;
  min-height: 100vh;
  
}
.fa,.fas,.far{
  font-size: 1.5rem;
}
.slide-enter-active {
  transition: all .3s;
}
.slide-leave-active {
  transition: all .3s
}
.slide-enter, .slide-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

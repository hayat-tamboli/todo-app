<template>
  <div id="app" :class="{dark: darkMode}">
    <HeaderComp :SideMenuProp="sideMenu" @side_menu_toggle="sideMenu=!sideMenu"></HeaderComp>
    <transition name="slide">
      <SideMenu v-show="sideMenu" :DarkModeProp="darkMode" @dark_mode="darkMode=!darkMode"></SideMenu>
    </transition>
    <main>
      <form autocomplete="off" @submit.prevent="addTodo">
        <input
          v-model="newTodoText"
          type="text"
          id="todo-input"
          placeholder="Add a todo..."
          @keyup.enter="addTodo"
        />
        <button @click="addTodo" class="todo-btn">
          <i class="far fa-plus-square icon"></i>
        </button>
      </form>
      <div class="todo-container">
        <ul class="todo-list">
          <li
            is="todo-item"
            v-for="(todo, index) in todos"
            v-bind:title="todo.title"
            v-bind:key="todo.id"
            v-on:remove="deleteTodo(index)"
          ></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp";
import SideMenu from "./components/SideMenu";
import TodoItem from "./components/TodoItem";
export default {
  name: "App",
  components: {
    HeaderComp,
    SideMenu,
    TodoItem
  },
  data() {
    return {
      darkMode: false,
      sideMenu: false,
      newTodoText: "",
      todos: [],
      nextTodoId: 0
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        console.log("error");
        localStorage.removeItem("todos");
      }
    }
    if (localStorage.darkMode) {
      if (localStorage.darkMode == "false") this.darkMode = false;
      else this.darkMode = true;
    }
  },
  watch: {
    darkMode(newDarkMode) {
      localStorage.darkMode = newDarkMode;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoText != "")
        this.todos.unshift({
          id: this.nextTodoId++,
          title: this.newTodoText
        });
      this.newTodoText = "";
      this.saveTodos();
    },
    saveTodos() {
      let parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
:root {
  font-family: "Jost", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  font-size: 3rem;
  padding: 1rem;
}
.dark {
  $darkblack: #1a1c27;
  background: $darkblack;
  color: white;
  #todo-input {
    background: $darkblack;
    color: #ffffff;
    &:hover {
      background: #333;
    }
  }
  .side-menu{
    background: #333;
  }
  .far,
  .fa,
  .fas {
    color: white;
  }
}
#app {
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 80vh;
    form {
      min-height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        outline: none;
        background: none;
        border: none;
      }
    }
    form input {
      border: none;
      border-bottom: medium solid #83deff;
      outline: none;
      &:hover {
        background: #f0f0f0;
      }
    }
    form input,
    form button {
      font-size: 2rem;
      min-height: 3rem;
    }
    .todo-container {
      .todo-list {
        display: flex;
        flex-direction: column;
        list-style: none;
        .todo {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          li {
            padding: 1rem;
          }
        }
      }
    }
  }
}
.fa,
.fas,
.far {
  font-size: 1.5rem;
}
.slide-enter-active,
.slide-left-enter-active,
.slide-leave-active,
.slide-left-active{
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-left-enter,
.slide-left-leave-to{
  transform: translateX(20px);
}
</style>

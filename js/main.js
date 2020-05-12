Vue.component("header-comp", {
  props: {
    darkmodep: Boolean,
    infoopenp: Boolean,
  },
  template: `<header>
  <div style="z-index: +80;">
    <ion-icon
      class="icon"
      title="darkmode"
      v-show="!darkmodep"
      @click="$emit(\'darkmode\')"
      name="moon-outline"
    ></ion-icon>
    <ion-icon
      class="icon"
      title="lightmode"
      v-show="darkmodep"
      @click="$emit(\'darkmode\')"
      name="moon"
    ></ion-icon>
  </div>
  <h1 class="title" style="font-size: 2.5rem; z-index: +1;">
    ✔️ TODO APP
  </h1>
  <div id="about" title="info" style="z-index: +100;">
    <ion-icon
      class="icon"
      v-show="!infoopenp"
      @click="$emit(\'infoopen\')"
      name="information-circle-outline"
    ></ion-icon>
    <ion-icon
      class="icon"
      v-show="infoopenp"
      name="information-circle"
      @click="$emit(\'infoopen\')"
    ></ion-icon>
  </div>
</header>`,
});
Vue.component("todo-item", {
  props: {
    title: String,
  },
  template: `<div class="todo">
    <li :class="{completeText : complete}">{{title}}</li>
    <div>
      <button @click="completedFunc">
        <ion-icon class="icon complete" v-if="complete" name="checkmark-circle"></ion-icon>
        <ion-icon class="icon complete" v-else name="checkmark-circle-outline"></ion-icon>
      </button>
      <transition name="slide-fade">
          <button v-show="complete" class="delete" v-on:click="completedFunc | $emit(\'remove\') ">
          <ion-icon name="trash-bin" class="icon" ></ion-icon>
        </button>
      </transition>
    </div>
  </div>`,
  data() {
    return {
      complete: false,
    };
  },
  methods: {
    completedFunc() {
      this.complete = !this.complete;
    },
  },
});
Vue.component("info-page", {
  template: `
  <div class="information">
  <div>
  <h2>
    MADE BY
    <a
      href="https://www.linkedin.com/in/hayat-tamboli/"
      target="_blank"
      rel="noreferrer"
      title="Hayat's linkedin"
    >
      HAYAT TAMBOLI</a
    >
  </h2>
  </div>
  <div class="github-btn">
    <a
      href="https://github.com/hayat-tamboli/a-todo-app"
      target="_blank"
      class="btn --animated"
      rel="noreferrer"
    >
      <span><ion-icon name="logo-github" style="font-size:2rem;padding:1rem 1rem 0 0;" ></ion-icon>open sourced on github</span>
    </a>
  </div>
</div>`,
});
let container = new Vue({
  el: ".container",
  data: {
    darkMode: false,
    infoOpen: false,
    newTodoText: "",
    todos: [],
    nextTodoId: 0,
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
    },
  },
  methods: {
    addTodo() {
      if (this.newTodoText != "")
        this.todos.unshift({
          id: this.nextTodoId++,
          title: this.newTodoText,
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
    },
    darkModeToggle() {
      this.darkMode = !this.darkMode;
    },
    infoOpenToggle() {
      this.infoOpen = !this.infoOpen;
    },
  },
});

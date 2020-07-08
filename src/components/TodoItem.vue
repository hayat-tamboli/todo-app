<template>
  <div class="todo">
    <draggable :list="todos" handle=".handle">
      <div v-for="(item, index) in todos" :key="index" class="todo-item">
        <label
          :class="{ completeText: item.completed }"
          id="t1"
          :content="item.Time"
          v-tippy="{ placement: 'left', arrow: true }"
          @dblclick="edit = !edit"
          v-if="!edit"
          >{{ item.title }}</label
        >
        <input
          type="text"
          v-model="item.title"
          v-else
          @blur="doneEdit"
          @keyup.enter="doneEdit"
          class="edit-box"
        />
        <div>
          <button @click="item.completed = !item.completed">
            <v-icon
              name="regular/check-square"
              scale="2"
              class="icon"
              v-if="!item.completed"
            />
            <v-icon name="check-square" scale="2" class="icon" v-else />
          </button>
          <transition name="slide-left">
            <button v-show="item.completed" v-on:click="deleteTodo(index)">
              <v-icon name="trash" scale="2" class="icon" />
            </button>
          </transition>
          <v-icon name="grip-lines" class="handle icon" scale="2" />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";
import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);
export default {
  name: "TodoItem",
  components: {
    draggable
  },
  props: {
    todos: Array
  },
  created() {
    /*let creationTime = new Date();
    let date =
      creationTime.getUTCDate() +
      "-" +
      creationTime.getUTCMonth() +
      "-" +
      creationTime.getUTCFullYear();
    let time;
    if (creationTime.getHours() < 12) {
      time = creationTime.getHours() + ":" + creationTime.getMinutes() + " AM";
    } else {
      time =
        creationTime.getHours() - 12 + ":" + creationTime.getMinutes() + " PM";
    }
    this.Time = "you created this at " + date + "\n" + time;
    */
  },
  data() {
    return {
      Time: "hi",
      edit: false
    };
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.$emit("savetodo");
    },
    doneEdit() {
      this.edit = false;
      this.$emit("savetodo");
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label {
    font-size: 2rem;
    padding: 1rem;
  }
  button {
    outline: none;
    border: none;
    background: none;
  }
}
.completeText {
  text-decoration: line-through;
  color: #bdbdbd;
  transition: all 0.3s;
}
.handle {
  cursor: grab;
}
.edit-box {
  padding: 0.5rem;
  font-size: 1.5rem;
  background: #e3e3e3;
  border: none;
}
</style>

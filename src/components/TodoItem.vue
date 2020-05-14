<template>
  <div class="todo">
    <li :class="{completeText : complete}">{{title}}</li>
    <div>
      <button @click="completedFunc">
        <i class="fas fa-check-square icon" v-if="complete"></i>
        <i class="far fa-check-square icon" v-else></i>
      </button>
      <transition name="slide-left">
        <button v-show="complete" v-on:click="completedFunc | $emit('remove') ">
          <i class="fas fa-trash icon"></i>
        </button>
      </transition>
      <i class="fas fa-grip-lines handle"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: String
  },
  data() {
    return {
      complete: false
    };
  },
  methods: {
    completedFunc() {
      this.complete = !this.complete;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  li{
    font-size: 2rem;
    padding: 1rem;
  }
  button{
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
.handle{
  cursor: grab;
}
</style>
<template>
    <div id="header">
        <button @click="$emit('side_menu_toggle')">
            <i class="fas fa-bars" v-if="!SideMenuProp" ></i>
            <i class="fas fa-times" v-else style="z-index: +100;"></i>
        </button>
        <h1>Minimal Todo App</h1>
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    props:{
        SideMenuProp:Boolean,
    }

}
</script>

<style lang="scss" scoped>
    #header{
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        button{
            background: none;
            border: none;
            outline: none;
        }
    }
</style>
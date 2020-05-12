<template>
    <div class="side-menu">
        darkmode:
        <button @click="$emit('dark_mode')">
            <i class="far fa-moon" v-if="!DarkModeProp" ></i>
            <i class="fas fa-moon" v-else ></i>
        </button>
    </div>
</template>
<script>
export default {
    name: 'SideMenu',
    props:{
        DarkModeProp:Boolean,
    }
}
</script>

<style lang="scss" scoped>
.side-menu{
    position: absolute;
    background: white;
    top: 10vh;
    left: 0;
    z-index: +10;
    height: 90vh;
    padding: 1rem 0.5rem;
    border-right: 1px solid #000000;
    button{
        outline: none;
        border: none;
        border-radius: 2rem;
        background: #000000;
        color: white;
        padding: 0.5rem;
    }
}
</style>
<template>
<div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <router-view></router-view><!-- esto sirve para que justo en esta seccion cargue el contenido de lo que hicimo click -->
    </div>
</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style>
.container{
    display: flex;
}

.content{
    flex: 1;/* Heace que el elemento tome todo el espacio del contenedor con flex */
    padding: 20px;
}
</style>
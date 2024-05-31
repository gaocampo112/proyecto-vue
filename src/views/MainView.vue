<template>
<Header :mensaje="texto"></Header> <!-- Esto lo hacemos para enviar la informacion al comonente hijo -->
<div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <input type="text" v-model="texto">
        {{ texto }}
        <router-view></router-view><!-- esto sirve para que justo en esta seccion cargue el contenido de lo que hicimo click -->
    </div>
</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue'
import { ref } from 'vue';
const texto = ref('');
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
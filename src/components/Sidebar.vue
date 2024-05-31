<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
        <li>
            <router-link to="/contador">Contador</router-link><!-- Solo funciona si tenemos instalada la dependencia de vue router -->
        </li>
        <li>
            <router-link to="/lista-de-tareas">Lista De Tareas</router-link>
        </li>
        <li>
            <router-link to="/registrar">Registrar</router-link>
        </li>
    </ul> 
</div>
</template>


<script setup>
import { useRegistarStore } from '@/modules/registro/stores/registrarStore'
import { ref, watch} from 'vue'; //watch es para escuchar los cambios de las variables cuando cambien en el store
const registrarStore = useRegistarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value)
watch(() => registrarStore.nombre, (newValue) =>{ //ese watch que va a estar escucahndo va apasar el valor a newValue
    nombre.value = newValue
})
watch(() => registrarStore.email, (newValue) =>{ //ese watch que va a estar escucahndo va apasar el valor a newValue
    email.value = newValue
})
</script>


<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
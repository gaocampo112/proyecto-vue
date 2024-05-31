<template>
    <div class="header">
        {{ mensajeRecibido }}<Weather></Weather>
    </div>
</template>

<script setup>
import Weather from './Wheater.vue'
import { defineProps, ref, watch } from 'vue'; /* Nos ayuda a definir propiedades que podemos recibir desde un componente prade*/
const props = defineProps(['mensaje']) /*  definepropr esta esperando un arreglo con las propiedades*/
const mensajeRecibido = ref(props.mensaje);
watch(() => props.mensaje, (newValue)=>{/* Esto sirve para que watch mantenga escuchando la variuable mensaje ya que esta no es reactiva en este componente */
    mensajeRecibido.value = newValue
})
</script>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}

h3{
    margin: 0;
}
</style>
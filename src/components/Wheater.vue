<template>
<h3>La temperatura actual es: {{ weatherStore.temperatura }}°</h3>
</template>

<script setup>
import {useWeather} from '../composables/useWeather';
import {onMounted} from 'vue';/*Esta funcion de vue me permite ejecutar funciones cuando este archivo sea montado */
import {useWeatherStore} from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(() =>{
    useWeather();
})
</script>

<style scoped>

</style>
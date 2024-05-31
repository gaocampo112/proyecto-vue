<template>
<h3>Propiedades computadas</h3>
<input type="text" v-model="valor">
{{ valorCalculado }}
<ResultadoSection v-show="mostrarElemento" :resultado="valorCalculado"></ResultadoSection> <!-- v-show es para nostrar o no mostrar un elemento, si v-show esta en true se muestra sino no -->
<ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection> <!-- Con este hace lo mismo pero el componente no se renderiza -->
<div v-else-if="isNaN(valor)"></div> <!-- Esto me retornara true o fals si es numero o no -->
<div v-else>Aqui no se muestra nada</div> <!-- Este se asocia con el v-if que tengamos encima de el -->

</template>

<script setup>
import {ref, computed} from 'vue'
import ResultadoSection from '../components/ResultadoSection.vue'
const valor = ref ('');
const valorCalculado = computed(() => { /* Esto es para hacer calculos con las variables */
    return valor.value * 3
})

const mostrarElemento = computed(() =>{/* Aca estamos validando para devolver true or false */
    return valor.value > 10
})
</script>

<style scoped>

</style>
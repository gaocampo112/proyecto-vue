
<template>
  <h1>hola mundo</h1>
  <p>{{ contador }}</p><!-- Asi podemos llamr las variables de js con {{ dobles }} -->
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
  
</template>

<script setup> //Siempre debe llevar la palabra setup para escribioe en composition API
  import {ref} from 'vue' //Para poder crear variables reactivas
  const contador = ref(0)
  const incrementar = ()=> {
    contador.value++
  }

  const decrementar = ()=> {
    contador.value--
  }

</script>

<style scoped>
p{
  color: red;
}
</style>

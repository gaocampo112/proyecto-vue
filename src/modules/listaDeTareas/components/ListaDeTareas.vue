<template><!-- ESTE ES EL HTML -->
    <div>
        <h2>Lista de Tares</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addtarea"> 
        <!-- el v-model nos permite la vinculacion bidireccional de datos con un elemento de formulario con un estado de vue -->
        <!-- es decir que a un input le asignamos una variable y al escribir en el, la variable va obteniendo la info de forma reactiva -->
        <!-- El keyup sirve para ejecutar la funcion al presionar una tecla, en este caso enter y en "" ponemos el nombre de la funcion a llamar -->  
        <ul>
            <!-- tarea: Es el nombre de la variable que representará cada elemento en la lista tareas. -->
            <!-- index: Es el índice del elemento actual en la lista tareas. Este índice es opcional, pero es útil si necesitas saber la posición del elemento en la lista. -->
            <!-- tareas: Es la colección (arreglo o lista) que estás iterando. -->
            <!-- :key="index": Este es otro atributo especial de Vue.js. La directiva :key se utiliza para ayudar a Vue a mantener el seguimiento de cada elemento en la lista cuando -->
            <!-- se actualiza la interfaz. Utilizar una key única para cada elemento ayuda a Vue a identificar qué elementos han cambiado, añadido o eliminado.  -->
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea">Borrar</button>
            </li>
        </ul>
    </div>
</template>

<script setup> //ESTE ES EL JS
import {ref} from 'vue'  //Esto es para crear un componente reactivo
const tareas = ref([])
const nuevaTarea = ref('')/* Esta es la variable que le asignasmos al v-model */
const addtarea = () => {
    tareas.value.push(nuevaTarea.value)/* con value podemos obtener el valor de una manera reactiva. Con push le agregamos otro elemento al arreglo */
    nuevaTarea.value = ''
} 

const borrarTarea = (index) => {
    tareas.value.splice(index,1) /* splice es para borrar elementos de un arreglo (indice de elemento a borrar, el numero de elementos que se borraran a partir del indice) */
}
</script>

<style> /* ESTE ES EL CSS */

</style>
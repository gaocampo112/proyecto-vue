import { defineStore } from 'pinia'
import {ref} from 'vue' //Para poder crear variables reactivas

export const useRegistarStore = defineStore('registar',() =>{/* cuando inicializamos una constante que luego vamos a exportar siempre se ocupa la palabra use para inicializar */
    const nombre = ref('')
    const email = ref('')
    const guardarRegistro = (nombreFormulario, emailFormularo) =>{
        nombre.value = nombreFormulario
        email.value = emailFormularo
    }
    return{nombre, email, guardarRegistro}
})
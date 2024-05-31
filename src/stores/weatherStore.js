import {defineStore} from "pinia";
import {ref} from "vue";

export const useWeatherStore = defineStore('weather', ()=>{ /*  defineStore es una función proporcionada por Pinia,se utiliza para definir una "store" en Pinia */
    const temperatura = ref(0)
    const setTemperatura = (temp) => {
        setTemperatura.value = temp
    }
    return {temperatura, setTemperatura}
});
<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit"><!-- De esta forma agregamos el esquema de validacion a este formulario -->
            <!-- @submit me ayudara a ejecutar una funcion a la hora de enviar este formulario -->
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" placeholder="Ingrese su nombre" id="nombre"></Field>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" name="email" placeholder="Ingrese su email" id="email" />
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>


<script setup>
/* Form se cambia por la etiqueta form de HTML */
/* Field se cambia por las etiquetas imput de html, requiere un name que son los mismos nombres que dimos en el esquema de validacion y una etiqueta de cerrado o un "/" */
import {Form, Field, ErrorMessage} from 'vee-validate' //Esto es de la dependencia que nos ayuda a validar la informacion de los usuarios npm vee-validate --save
import {schema} from '../schemas/validationSchema'

const onSubmit = () => {
    console.log("Se ha enviado el formulario")
}
</script>

<style scoped> /* el scoped se usa para encapsular los estilos y que solo se aplique en el componente en el que estamos */
.form{
    margin-bottom: 10px;
}
</style>
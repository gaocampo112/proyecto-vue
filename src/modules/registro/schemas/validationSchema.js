import * as yup from 'yup';

export const schema = yup.object({ //Este es el esquema de validacion que instalamos con npm install @vee-validate/yup
    nombre: yup.string().required(), 
    email: yup.string().email().required()
});
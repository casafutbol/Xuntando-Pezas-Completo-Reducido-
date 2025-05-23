import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';

import { storage } from './configuracion.multer';
import { accesoUser, isUser } from './CONTROLADORES/USERS';
import { crearNewUser } from './CONTROLADORES/crearNewUser';
import { getCustomers, putCustomers, deleteCustomers } from './CONTROLADORES/CUSTOMERS';
import { endpoints } from './datos/endpoints';

dotenv.config();
const portNumber = 3000;
const app = express();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

// ENDPOINTS DE USUARIOS
app.post(endpoints.acceso, accesoUser);
app.post("/usuarios", upload.single("file"), crearNewUser);

// ENDPOINTS DE CLIENTES
app.get(endpoints.customers, getCustomers);
app.put(endpoints.customersEditar, isUser, putCustomers);
app.delete(endpoints.customersBorrar, isUser, deleteCustomers);

// ARRANCAR SERVIDOR
app.listen(portNumber, () => {
    console.log('Listening on localhost:' + portNumber);
});

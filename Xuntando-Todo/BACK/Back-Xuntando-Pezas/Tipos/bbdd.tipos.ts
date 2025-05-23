// Tipos para conexión a BBDD
export type arquivoBBDD = {
  xeral: string;
  persoal: string;
};

// Tipo que representa un usuario en la tabla TRABALLADOR
export type datoUser = {
  NAME_USER_TRABALLADOR: string;
  PWD_TRABALLADOR: string;
};

// Tipo que representa los posibles valores retornados al leer usuario
export type datoUserEisUser = datoUser | boolean | undefined;

// Tipo que representa una promesa que devuelve datoUserEisUser
export type promesaEDatos = Promise<datoUserEisUser>;

// Tipo para sentencias SQL
type instruccions = {
  sqlLecturaUser: string;
  sqlLogin: string;
};

export type sentencias = {
  instruccion: instruccions;
};

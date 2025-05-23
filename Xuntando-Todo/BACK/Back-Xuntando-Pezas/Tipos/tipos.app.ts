export type formAcceso = {
  username: string;
  pwd: string;
};

// Opción recomendada: objeto con campos nombrados
export type datoTraballador = {
  name: string;
  pwd: string;
};

// O si realmente necesitas una tupla:
// export type datoTraballador = [string, string];

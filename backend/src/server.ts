import 'dotenv/config'; // Carga las variables del .env

const PORT = process.env.PORT ?? 3001;
console.log(`Server running on port ${PORT}`);
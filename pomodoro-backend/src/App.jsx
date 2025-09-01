import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importar rutas
// import musicRoutes from './routes/musicRoutes.js';
import goalsRoutes from './routes/goalsRoutes.js';
// import notesRoutes from './routes/notesRoutes.js';

// Configurar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Parsea JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // Parsea datos de formularios

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '¡API de Pomodoro funcionando!' });
});

// Conectar rutas
// app.use('/api/music', musicRoutes);
app.use('/api/goals', goalsRoutes);
// app.use('/api/notes', notesRoutes);

// Middleware para manejar rutas no encontradas
app.use('/*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware para manejar errores
app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('Error:', error);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;

import app from './App.js';
import { PORT } from './config/env.js';
import { connectDB } from './config/db.js';

const port = PORT.port || 3000;

const server = app.listen(port, async () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  console.log(`📱 Entorno: ${PORT.nodeEnv}`);
  
  // Conectar a MongoDB
  await connectDB();
  
  console.log(`⏰ API de Pomodoro lista para usar`);
});

// Manejo de errores del servidor
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Puerto ${port} ya está en uso`);
  } else {
    console.error('❌ Error al iniciar el servidor:', error);
  }
  process.exit(1);
});

// Manejo de señales para cerrar el servidor
process.on('SIGTERM', () => {
  console.log('🛑 Recibida señal SIGTERM, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 Recibida señal SIGINT, cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  });
});

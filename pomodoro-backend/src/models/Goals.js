import mongoose from 'mongoose';

// Esquema para las metas de estudio
const goalSchema = new mongoose.Schema({
  // Texto de la meta (ej: "Leer capítulo 5 del libro")
  text: {
    type: String,
    required: true,
    trim: true
  },
  
  // Número del set (1, 2, 3, o 4)
  setNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  
  // Si la meta está completada
  completed: {
    type: Boolean,
    default: false
  },
  
  // Fecha de creación
  createdAt: {
    type: Date,
    default: Date.now
  }
});


// Crear y exportar el modelo
const Goal = mongoose.model('Goal', goalSchema);

export default Goal;

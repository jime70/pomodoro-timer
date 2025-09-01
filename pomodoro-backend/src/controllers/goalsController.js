import Goal from '../models/Goals.js';

// Crear una nueva meta
export const createGoal = async (req, res) => {
  try {
    const { text, setNumber } = req.body;
    
    // Verificar que no haya más de 5 metas por set
    const metasExistentes = await Goal.countDocuments({ setNumber });
    if (metasExistentes >= 5) {
      return res.status(400).json({ 
        error: "Máximo 5 metas por set" 
      });
    }
    
    const nuevaMeta = new Goal({ text, setNumber });
    const metaGuardada = await nuevaMeta.save();
    
    res.status(201).json(metaGuardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las metas
export const getAllGoals = async (req, res) => {
  try {
    const metas = await Goal.find().sort({ setNumber: 1, createdAt: 1 });
    res.json(metas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener metas de un set específico
export const getGoalsBySet = async (req, res) => {
  try {
    const { setNumber } = req.params;
    const metas = await Goal.find({ setNumber }).sort({ createdAt: 1 });
    res.json(metas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una meta
export const updateGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    
    const metaActualizada = await Goal.findByIdAndUpdate(
      id, 
      { text, completed }, 
      { new: true }
    );
    
    if (!metaActualizada) {
      return res.status(404).json({ error: "Meta no encontrada" });
    }
    
    res.json(metaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una meta
export const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const metaEliminada = await Goal.findByIdAndDelete(id);
    
    if (!metaEliminada) {
      return res.status(404).json({ error: "Meta no encontrada" });
    }
    
    res.json({ message: "Meta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

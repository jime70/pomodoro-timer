import express from 'express';
import { 
  createGoal, 
  getAllGoals, 
  getGoalsBySet, 
  updateGoal, 
  deleteGoal 
} from '../controllers/goalsController.js';

const router = express.Router();

// Crear una nueva meta
router.post('/', createGoal);

// Obtener todas las metas
router.get('/', getAllGoals);

// Obtener metas de un set específico
router.get('/set/:setNumber', getGoalsBySet);

// Actualizar una meta
router.put('/:id', updateGoal);

// Eliminar una meta
router.delete('/:id', deleteGoal);

export default router;

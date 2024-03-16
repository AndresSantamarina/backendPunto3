import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores } from "../controllers/colores.controllers.js";


const router = Router();

router.route('/colores').get(listarColores).post(crearColor)
router.route('/color/:id').put(editarColor).delete(borrarColor)

export default router;
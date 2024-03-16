import { Router } from "express";
import { crearColor, editarColor, listarColores } from "../controllers/colores.controllers.js";


const router = Router();

router.route('/colores').get(listarColores).post(crearColor)
router.route('/color/:id').put(editarColor)

export default router;
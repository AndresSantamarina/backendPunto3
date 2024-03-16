import { Router } from "express";
import { crearColor } from "../controllers/colores.controllers.js";


const router = Router();

router.route('/colores').post(crearColor)

export default router;
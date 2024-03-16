import Color from "../database/model/color.js";

export const listarColores = async (req, res)=>{
    try {
        const colores = await Color.find();
        res.status(200).json(colores)
    } catch (error) {
        res.status(404).json({
            mensaje: "No se encontraron colores"
        })
    }
}


export const crearColor = async (req, res) => {
    try {
        const colorNuevo = new Color(req.body)
        await colorNuevo.save()
        res.status(201).json({
            mensaje: "El color fue creado correctamente"
        })
    } catch (error) {
        res.status(400).json({
            mensaje: "No se pudo crear el color"
        })
    }
}

export const editarColor = async (req, res)=>{
    try {
        const buscarColor = await Color.findById(req.params.id)
        if(!buscarColor){
            return res.status(404).json({
                mensaje: "No se pudo editar el color, el id es incorrecto"
            })
        }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "El color fue modificado correctamente"
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrió un error al intentar editar el color"
        })
    }
}
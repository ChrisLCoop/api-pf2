 import {pool} from '../db.js'
 
 export const getCursos=async (req,res)=> {
    try {
        const [rows] = await pool.query('SELECT * FROM cursos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal, rayos...'
        })
    }
    
 }

 export const getCurso = async(req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM cursos WHERE id = ?',[req.params.id])
        if (rows.length <=0) return res.status(404).json({
            message: 'Curso no encontrado'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal, rayos...'
        })
    }
 }

 export const createCursos= async (req,res)=> {
    const {nombre, comentario, descripcion, popularidad, profesor, subido, idioma, subtitulo, precio, imagen, dificultar, duracion, estudiantes, apren_a, apren_b, apren_c} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO cursos(nombre, comentario, descripcion, popularidad, profesor, subido, idioma, subtitulo, precio, imagen, dificultar, duracion, estudiantes, apren_a, apren_b, apren_c) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[nombre, comentario, descripcion, popularidad, profesor, subido, idioma, subtitulo, precio, imagen, dificultar, duracion, estudiantes, apren_a, apren_b, apren_c])
        res.send({
            id: rows.insertId,
            nombre,
            comentario,
            descripcion,
            popularidad,
            profesor,
            subido,
            idioma,
            subtitulo,
            precio,
            imagen,
            dificultar,
            duracion,
            estudiantes,
            apren_a,
            apren_b,
            apren_c,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal, rayos...'
        })
    }
 }


 export const deleteCursos= async(req,res)=> {
    try {
        const [result] = await pool.query('DELETE FROM cursos WHERE id = ?', [req.params.id])
        //console.log(result)

        if (result.affectedRows <=0) return res.status(404).json({
            message: 'Curso no encontrado'
        })
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal, rayos...'
        })
    }
 }

 export const updateCursos= async (req,res)=> {
    const {id} = req.params
    const {nombre, comentario, descripcion, popularidad, profesor, subido, idioma, subtitulo, precio, imagen, dificultar, duracion, estudiantes, apren_a, apren_b, apren_c} = req.body

    try {
        const [result] = await pool.query('UPDATE cursos SET nombre= IFNULL(?, nombre), comentario=IFNULL(?, comentario), descripcion=IFNULL(?, descripcion), popularidad=IFNULL(?, popularidad), profesor=IFNULL(?, profesor), subido=IFNULL(?, subido), idioma=IFNULL(?, idioma), subtitulo=IFNULL(?, subtitulo), precio=IFNULL(?, precio), imagen=IFNULL(?, imagen), dificultar=IFNULL(?, dificultar), duracion=IFNULL(?, duracion), estudiantes=IFNULL(?, estudiantes), apren_a=IFNULL(?, apren_a), apren_b=IFNULL(?, apren_b), apren_c=IFNULL(?, apren_c) WHERE id = ?',[nombre, comentario, descripcion, popularidad, profesor, subido, idioma, subtitulo, precio, imagen, dificultar, duracion, estudiantes, apren_a, apren_b, apren_c, id])

        if (result.affectedRows ===0) return res.status(404).json({
            message: 'Curso no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM cursos WHERE id=?',[id])

        //console.log(result)
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal, rayos...'
        })
    }
 }


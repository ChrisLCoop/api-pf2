import express from 'express'
import cursosRoutes from './routes/cursos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',cursosRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Pagina no encontrada'
    })
})

export default app
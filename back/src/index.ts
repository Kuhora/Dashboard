import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4444

app.get('/ping', (req, res) => {
    res.send('pong')
})

    app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

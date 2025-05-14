import express from 'express'

const app = express()
const PORT = 3001

app.get('/ping', (req, res) => {
    res.send('pong')
})

    app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

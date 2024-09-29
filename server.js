const express = require('express')
const router = express.Router()
const cors = require('cors')

const app = express()

const users = []

app.use(express.json())
app.use(cors())


//rotas
// Get - fornecer dados para frontend

const getUsers = router.get('/users', (req, res) => {
    res.status(200),json(users)
})
//Post - criar dados quando as informações forem fornecidas pelo front

const createUsers = router.post('/users', (req, res) => {
    const users = {
        id: req.body.id,
        name: req.body.name
    }

const usersUpdate = users.push(user)
    res.status(201).json(usersUpdate)

})

app.use(createUsers)
app.use(getUsers)

app.listen(3333, console.log('Servidor rodando com sucesso!'))




const express = require('express')
const router = express.Router()

const routes = [
    {
        path: 'user'
    },
    {
        path:'clients'
    },
    {
        path:'historial'
    },
    {
        path:'history-detail'
    },
    {
        path:'flavours'
    },
    {
        path:'products'
    },
    {
        path: 'items'
    },
    {
        path: 'auth'
    },
    {
        path: 'upload'
    }
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router
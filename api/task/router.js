// build your `/api/resources` router here

const express = require('express')
// const Tasks = require('./model')
const router = express.Router();

const db = require('../../data/dbConfig')


router.get('/', (req, res, next) => {
    db('tasks')
    .then(projects => {
        res.json(projects);
    })
    .catch(next)
})


router.post('/', async (req, res) => {
    const taskData = req.body;
    db('tasks').insert(resourceData)
    .then(ids => {
        return db('tasks').where({id: ids[0]})
    })
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})



module.exports = router;
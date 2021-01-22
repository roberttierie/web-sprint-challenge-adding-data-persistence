// build your `/api/resources` router here

const express = require('express')
// const Project = require('./model')
const router = express.Router();

const db = require('../../data/dbConfig')


router.get('/', (req, res, next) => {
    db('projects')
    .then(projects => {
        res.json(projects);
    })
    .catch(next)
})


router.post('/', async (req, res) => {
    const projectData = req.body;
    db('projects').insert(projectData)
    .then(ids => {
        return db('projects').where({id: ids[0]})
    })
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})



module.exports = router;
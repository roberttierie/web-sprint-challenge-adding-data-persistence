// build your `/api/resources` router here

const express = require('express')
// const Resources = require('./model')
const router = express.Router();

const db = require('../../data/dbConfig')


router.get('/', (req, res, next) => {
    db('resources')
    .then(projects => {
        res.json(projects);
    })
    .catch(next)
})


router.post('/', async (req, res) => {
    const resourceData = req.body;
    db('resources').insert(resourceData)
    .then(ids => {
        return db('resources').where({id: ids[0]})
    })
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})



module.exports = router;
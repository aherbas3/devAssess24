import express from 'express';
import {User, Animal, TrainingLog} from '../models/allModels.js';
const router = express.Router()

router.get('/health', (req,res) => {
    res.json({"healthy": true})
})

//to create a user in the database based on information passed into the body
router.post('/user', (req, res) => {

})

//to create an animal in the database based on information passed into the body
router.post('/animal', (req, res) => {

})

//to create a training log in the database based on information passed into the body
router.post('/training', (req, res) => {

})

export default router;
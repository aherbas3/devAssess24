import { ObjectId } from 'mongodb'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

const animalSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hoursTrained: {
        type: number,
        required: true
    },
    owner: {
        type: ObjectId,
        required: true
    }
})

const Animal = mongoose.model('Animal', animalSchema)


const trainingLogSchema = new Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hours: {
        type: number,
        required: true
    },
    animal: {
        type: ObjectId,
        required: true
    },
    user: {
        type: ObjectId,
        required: true
    }
})

const TrainingLog = mongoose.model('TrainingLog', trainingLogSchema)

export default {User, Animal, TrainingLog};
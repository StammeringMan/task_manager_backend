/**
 * 
 * @author: Abhinav Alok on 06'th Oct, 2020
 */

import mongoose from "mongoose";

const Schema = mongoose.Schema;


const taskSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    expiryDate: {
        type: Date
    },
    comments: {
        type: String
    },
    status: {
        type: String,
        enum: ['created', 'assigned', 'picked', 'completed', 'delayed', 'flaged'],
        default: 'created'
    },
    taskDelay: [{
        reasonForDelay: {
            type: String
        },
        nextExpiryDate: {
            type: Date
        },
        reassignedTo: {
            type: Schema.Types.ObjectId 
        },
        currentStatus: {
            type: String
        },
        assignee: {
            name: {
                type: String
            },
            email: {
                type: String
            },
            mobile: {
                type: String
            }
        },
    }],
    statusHistory: [{
        createdBy: {
            name: {
                type: String
            },
            mobile: {
                type: String
            },
            email: {
                type: String
            }
        },
        createdOn : {
            type: Date   
        },
        status: {
            type: String
        },
        assignedTo: { 
            type: Schema.Types.ObjectId 
        },
        assignee: {
            name: {
                type: String
            },
            email: {
                type: String
            },
            mobile: {
                type: String
            }
        },
    }],
    assignedTo: { 
        type: Schema.Types.ObjectId 
    },
    assignee: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        mobile: {
            type: String
        }
    },

}, { timeStamp: true });

const TaskModel = mongoose.model('task', taskSchema);

export default TaskModel;

/**
 *  @author: Abhinav Alok on 02 Oct, 2020
 */

import mongoose from 'mongoose';

const Schema =  mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String
    },
    hash: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        addressLineOne: {
            type: String
        },
        addressLineTwo: {
            type: String
        },
        landMark: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pinCOde: {
            type: String
        },
        defaultAddress: {
            type: Boolean,
            default: true
        }
    },
    status: {
        type: String,
        enum: ['created', 'approval-pending', 'approved', 'active'],
        default: 'created'
    },
    role: {
        type: String,
        enum: ["admin", "user", "pending-approval"],
        default: 'pending-approval'
    },
    tasks: [{
        taskId: {
            type: Schema.Types.ObjectId,
            ref: 'Tasks'
        },
        assignedBy: {
            name: {
                type: String
            },
            mobile: {
                type: String
            }
        },
        expiryDate: {
            type: Date
        },
        assignedOn: {
            type: Date
        }

    }]
}, { timestamps: true });

const UserModel = mongoose.model('user', userSchema)

export default UserModel
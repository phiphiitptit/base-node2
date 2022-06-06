import mongoose from 'mongoose';

mongoose.Promise = global.Promise;


const UserSchema = new mongoose.Schema({
       
        username: {
                type: String,
                required: true
        },
        pwd: {
                type: String,
                required: true,
        },
        name: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
        }
},
        {
                timestamps: true
        });

const myDB = mongoose.connection.useDb("hawaco");

const UserModel = myDB.model("User",UserSchema,"user");

export default UserModel;
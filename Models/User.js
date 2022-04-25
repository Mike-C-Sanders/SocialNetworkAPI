const {Schema, Types} = require('mongoose');
const {thoughtSchema} = require('./Thought')

const userSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username:{
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type:String,
            unique: true,
            required: true,
            //validate the email is true using a regex and built in test
            validate:{
                validator: function(email){
                    return `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`.test(email);
                },
                message: console.log(`A valid email address is required`),
            }
        },
        //array for user thoughts
        thoughtArray: [thoughtSchema],
        friends: [userSchema],
    }
)

const User = model('user', userSchema);
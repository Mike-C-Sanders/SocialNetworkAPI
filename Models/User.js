const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        // userId:{
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
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
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Enter a valid Email Address',
            ],
            //validate the email is true using a regex and built in test
            // validate:{
            //     validator: function(email){
            //         return email.match(`);
            //         // email.match(``)
            //     },
            //     message: console.log(`A valid email address is required`),
            // }

        },
        //array for user thoughts
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user',
            
        }]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
)

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
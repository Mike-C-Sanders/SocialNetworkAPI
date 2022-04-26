const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (time)=>{
                //return a useable timestamp by using the new date and toLocal Date String method
                return new Date (time).toLocaleDateString();
            }
        },
        //user who created the thought
        username:{
            type: String,
            required: true,
        },
        //reaction nested documents array
        reactions:[reactionSchema],

    },
    {
        toJSON:{
            getters: true,
            virtuals: true,
        }
    }
)

//count number of reactions for this thought
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);


module.exports = Thought;
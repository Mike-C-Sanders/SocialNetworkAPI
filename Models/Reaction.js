const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        //main body of the reaction, maximum character length of 280 characters
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        }
    }
)
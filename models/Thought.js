const { Schema, model, Types} = require("mongoose");


//schema for reactions 
const reactionSchema = new Schema(
{
    reactionId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId,
    },
    reactionBody:{
        type: String, 
        required: true, 
        maxlength: 280,  
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
}, 
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//schema for thoughts 
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: "Required Thought", 
            minlength: 1, 
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String, 
            required: true
        },
        //create an array for the reaction schema within thoughts 
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true, 
            getters: true,
          },
          id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
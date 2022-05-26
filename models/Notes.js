const mongoose = require('mongoose')
  const { Schema } = mongoose;

  const NotesSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title : {
        type: String,
    },
    description: {
        type : String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    allnote:{
        type : Boolean,
        default: true,
    }
    });

    module.exports = mongoose.model('notes',NotesSchema)
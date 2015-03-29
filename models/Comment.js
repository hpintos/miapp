var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  jugador: { type: mongoose.Schema.Types.ObjectId, ref: 'Jugador' }
});

mongoose.model('Comment', CommentSchema);
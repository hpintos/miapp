var mongoose = require('mongoose');

Schema = mongoose.Schema;
var jugadorSchema = new Schema({
	nombre: { type: String, required: true},
	apodo: { type: String, unique: true, required: true},
	email: { type: String, unique: true },
	goles: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

jugadorSchema.methods.upvote = function(cb) {
  this.goles += 1;
  this.save(cb);
};

//Para poder utilizarlo desde otro archivo lo debemos exportar como modulo de la siguiente manera
module.exports = mongoose.model('Jugador',jugadorSchema);
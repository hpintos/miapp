var mongoose = require('mongoose');
var Jugador = require('./Jugador');

Schema = mongoose.Schema;
var partido = new Schema({
	lugar: { type: String, required: true},
	fecha: { type: Date, required: true, unique: true},
	jugadores: { type: mongoose.Schema.Types.ObjectId, ref: 'Jugador' }
});

//Para poder utilizarlo desde otro archivo lo debemos exportar como modulo de la siguiente manera
module.exports = mongoose.model('Partido',partido);
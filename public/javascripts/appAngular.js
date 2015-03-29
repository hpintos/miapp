var app = angular.module('futbol', ['ui.router'])

app.factory('partidos', [function(){
  var o = {
    partidos: []
  };
  return o;
}]) 
app.controller('MainCtrl', [
'$scope',
'partidos',
function($scope,partidos){
	$scope.partidos = partidos.partidos;
	$scope.addPartido = function(){
	  $scope.partidos.push(
	  	{
	  		lugar: $scope.lugar,
	  		goles: 0,
	  		jugadores: [
			    {nombre: 'Hernan', apodo: 'Nan!'},
			    {nombre: 'Ricardo', apodo: 'Ricaldao'}
			],
			comments: [
			    {author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			]

	  	});
	  $scope.lugar = '';
	};
	$scope.incrementGoles = function(partido) {
	  partido.goles += 1;
	};
}]);

app.controller('PartidosCtrl', [
'$scope',
'$stateParams',
'partidos',
function($scope, $stateParams, partidos){
	$scope.partido = partidos.partidos[$stateParams.id];
	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  $scope.partido.comments.push({
	    body: $scope.body,
	    author: $scope.nombre,
	    upvotes: 0
	  });
	  $scope.body = '';
	};
	var usuario = {nombre: $scope.nombre, apodo: $scope.apodo, email: $scope.email};
	$scope.inscribirse = function(){
	  if($scope.nombre === '') { return; }
	  $scope.partido.jugadores.push(usuario);
	};
	$scope.desinscribirse = function(){
	  if($scope.nombre === '') { return; }
	  $scope.partido.jugadores.pop(usuario);
	};
	$scope.toogle = function(){
		$scope.myVar = !$scope.myVar;
	};
}]);

app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

	$stateProvider.state('partidos', {
	  url: '/partidos/{id}',
	  templateUrl: '/partidos.html',
	  controller: 'PartidosCtrl'
	});

	$urlRouterProvider.otherwise('/home');
}]);
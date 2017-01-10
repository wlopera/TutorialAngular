angular.module('myApp',[]).
  controller('AlumnosController', ['$scope', function($scope){
    $scope.alumnos  = [
      {
        nombre: "Romulo Gallegos",
        telefono:"0424-1234567",
        curso: "Escritor"
      },{
        nombre: "Juan Liscano",
        telefono:"0212-4343435",
        curso: "Dramaturgo"
      },{
        nombre: "Julio Garmendia",
        telefono:"0416-1234765",
        curso: "Escritor"
      },{
        nombre: "Gabriel Garcia Marquez",
        telefono:"0424-546342",
        curso: "Poeta"
      }
    ]
}]);

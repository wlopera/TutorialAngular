angular.module('myApp',[]).
  controller('AlumnosController', ['$scope', function($scope){
    $scope.alumnos  = [
      {
        nombre: "Romulo Gallegos",
        telefono:"0424-1234567",
        curso: "Escritor"
      },{
        nombre: "Ana T. Viola",
        telefono:"0212-4343435",
        curso: "Dramaturga"
      },{
        nombre: "Julio Garmendia",
        telefono:"0416-1234765",
        curso: "Escritor"
      },{
        nombre: "Gabriel Garcia Marquez",
        telefono:"0424-546342",
        curso: "Poeta"
      }
    ];

    $scope.Save = function(){
        $scope.alumnos.push({
          nombre:$scope.nuevoAlumno.nombre,
          telefono:$scope.nuevoAlumno.telefono,
          curso:$scope.nuevoAlumno.curso
        });
        $scope.formVisibility = false;
        console.log($scope.formVisibility);
    };

    $scope.formVisibility = false;

    $scope.ShowForm = function(){
      $scope.formVisibility = true;
      console.log($scope.formVisibility);
    };

}]);

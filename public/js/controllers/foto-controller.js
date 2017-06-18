angular.module('alurapic').controller('FotoController', function($scope , $http){
   $scope.foto = {};

   $scope.submeter = function(){
      console.log($scope.foto);
   };

   $http.put('v1/fotos')
   .success(function(fotos){
      $scope.fotos = fotos;
   })
   .error(function(erro){
      console.log(erro);
   });
});

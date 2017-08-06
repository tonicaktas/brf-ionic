// Kontakt
app.controller('GarageCtrl',function($scope, $firebaseArray, $state, noteService){
   // puts all notes to variable notes

   $scope.notes = noteService.all;
   console.log( $scope.notes);

    $scope.stor = false;
    $scope.liten = false;

  $scope.showStor = function(){
    $scope.stor = true;
    $scope.liten = false;
  }

  $scope.showLiten = function(){
    $scope.liten = true;
    $scope.stor = false;
  }



});

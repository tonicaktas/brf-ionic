//Föråd
app.controller('ForadCtrl',function($scope, $firebaseArray, $state, noteService){
   // puts all notes to variable notes




   $scope.notes = noteService.all;
   console.log( $scope.notes);
});

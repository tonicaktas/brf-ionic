//Föråd
app.controller('InfobladCtrl',function($scope, $firebaseArray, $state, noteService, $interval){
   // puts all notes to variable notes

   $scope.bilder = Math.floor(Math.random() * 1060) + 1;


   $scope.notes = noteService.all;
   console.log( $scope.notes);
});

//LokalCtrl
app.controller('LokalCtrl',function($scope, $firebaseArray, $state, noteService){
  $scope.saveNote = function(){
    $scope.newNote = noteService.all;


    $scope.newNote.$add({
        lokal:[
       {
         namn: $scope.namn,
         datum: $scope.datum

       }
     ]
   }).then(function(){


     // Clear Form
     clearFields();
     $scope.formShow = false;

     });

    $state.go('Lokal');


  }



  $scope.notes = noteService.all;
  console.log($scope.notes);

  function clearFields(){
    console.log('clearing all fields');

    $scope.namn = '';
    $scope.datum = '';


  }

  $scope.bokaLokal = function(contact){
  $scope.formShow = true;
}

});

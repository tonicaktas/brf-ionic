//Gästlägenhet
app.controller('LagenhetCtrl',function($scope, $firebaseArray, $state, noteService){
   $scope.notes = noteService.all;
   console.log($scope.notes)



   $scope.saveGast = function(){
     $scope.newNote = noteService.all;


     $scope.newNote.$add({
         gast:[
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

     $state.go('Lagenhet');
   }


   $scope.bokaGast = function(contact){
   $scope.formShow = true;
 }


 function clearFields(){
   console.log('clearing all fields');

   $scope.namn = '';
   $scope.datum = '';


 }
});

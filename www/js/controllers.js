// Add Note

app.controller('BokaCtrl',function($scope, $firebaseArray, $state, noteService){

  $scope.saveNote = function(){
    $scope.newNote = noteService.all;
    $scope.newNote.$add({
      title: $scope.title,
      body: $scope.body,

        lokal:[
				{
					namn: $scope.namn,
					datum: $scope.datum

				}
			]
    });
    $state.go('home');
  }


});


// Kontakt
app.controller('KontaktCtrl',function(){
   // puts all notes to variable notes
});








// Single Notes

app.controller('SingleNoteCtrl',function($scope,  noteService, $stateParams, $state){ // stateParams is for id, state is for view
  $scope.singleNote = noteService.get($stateParams.id);
  $scope.namn = $scope.singleNote.lokal[0].namn;
  $scope.datum = $scope.singleNote.lokal[0].datum;

  console.log($scope.singleNote);
  console.log($scope.namn );
});

// Delete Notee

app.controller('DeliteNoteCtrl',function($scope,  noteService, $state, $ionicActionSheet){
  // stateParams is for id, state is for view
  // $ionicActionSheet popup/slide
  $scope.notes = noteService.all;

  $scope.showDetails = function(id){ // function that deletes note
    $ionicActionSheet.show({
      destructiveText: 'Delete',
      titleText:'Are You Shure',
      cancelText:'Cancel',
      destructiveButtonClicked: function(){ // när knappen är klickad deletar den med hjälp av id
        var rem = $scope.notes.$getRecord(id); // hämtar aktuel id från notes
        $scope.notes.$remove(rem); // delitar noten med hjälp av id
        return true;
      }
    });
  }

});

// Edit Note
app.controller('EditNoteCtrl',function($scope,  noteService){
  $scope.notes = noteService.all;  // puts all notes to variable notes
});


// Update Note
app.controller('updateNoteCtrl',function($scope, noteService, $stateParams, $state,){
  $scope.notes = noteService.all;  // puts all notes to variable notes
  $scope.singleNote = noteService.get($stateParams.id);
  $scope.title = $scope.singleNote.title;
  $scope.body = $scope.singleNote.body;
  $scope.myid = $scope.singleNote.$id;



  $scope.updateNote = function(id){
      var ed = $scope.notes.$getRecord(id); // hämtar rätt id
      ed.title = $scope.title; // byter ut title som fylls formulären
      ed.body = $scope.body;  // byter ut body som fylls formulären
      $scope.notes.$save(ed); // sparar allt nya
      $state.go('editNote'); // redirectar till /editnote sidan
  }
});

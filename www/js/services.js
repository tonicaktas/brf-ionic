app.factory('noteService',function($firebaseArray){
  var fbRef = new Firebase('https://brf2-27b76.firebaseio.com/');
  var notes = $firebaseArray(fbRef);
  var noteService = {
    all: notes,
    get: function(noteId){
      return notes.$getRecord(noteId);

    }
  }

  return noteService;

});

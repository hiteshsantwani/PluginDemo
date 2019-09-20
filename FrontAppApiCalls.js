var conversation;

function Notes() {
    Front.fetchNotes(conversation);
  }

function fetchInboxes() {
  
  Front.on('conversation', function (data) {
    
    console.log(data.msg_);

});

}


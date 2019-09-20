var conversation;

function Notes() {
    Front.fetchNotes(conversation);
  }

function fetchInboxes() {
  Front.fetchInboxes(function (inboxes) {
    if (!inboxes)
      return;

    console.log(inboxes);
  });
}

  
  Front.on('conversation', function (data) {
    
    console.log(data.msg_);

});

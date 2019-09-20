var conversation;

function Notes() {
    Front.fetchNotes(conversation);
  }

function fetchInboxes() {
  
  Front.on('conversation', function (data) {
    
    console.log(data.msg_);

});

}

Front.on('conversation', function (data) {
  console.log('Conversation', data.conversation);
  console.log('Contact', data.contact);
  console.log('Message', data.message);
  console.log('OtherMessages', data.otherMessages);
  conversation = data.conversation;
});


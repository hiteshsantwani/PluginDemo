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

  

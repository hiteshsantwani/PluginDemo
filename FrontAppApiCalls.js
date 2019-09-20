var conversation;

function Notes() {
    Front.fetchNotes(conversation);
  }

  function fetchTeammates() {
    Front.fetchAllowedTeammates(function (teammates) {
      if (!teammates)
        return;
  
      console.log(teammates);
    });
  }
  

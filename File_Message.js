function fileMessage() {
  
    var url = new URL("http://localhost:55530/api/mlisa/");
    fetch(url, {
         
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
         
        headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwic3ViIjoiaWN0LnVzQG1jcXVpbGxpbmcuY29tIiwiYXVkIjoiQW55IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYXRvciIsIm5iZiI6MTU2ODk5ODg1NCwiZXhwIjoxNTY5MDg1MjU0LCJpc3MiOiJodHRwczovL2F0bGlzLm1jcXVsbGluZy5jb20ifQ.XE-zk733CGXdt2JJR9nKK9j1EUy9d39VGD9hEFbk9h0'
         
                 }
        })
        .then(response => response.json())
		.then( data => {
					// JavaScript
			//document.getElementById('myData').innerHTML = json2table(data);
			table.setData(data);
			console.log(data);
		})
}

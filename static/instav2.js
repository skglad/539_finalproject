fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + apiKey, {    method: 'get',  })  .then(response => { return response.json(); })  .then(json => { console.log(json); });

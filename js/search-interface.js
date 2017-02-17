var Searching = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var newSearch = new Searching();
  $('button').click(function(event) {
    event.preventDefault();
    $('.dataholder1').empty();
    $('.dataholder2').empty();
    $('.dataholder3').empty();
    $('.dataholder4').empty();
    var input = $('#search').val();
    $('#search').val("");
    var getUserPromise = newSearch.getUser(input);
    getUserPromise.then(function(person) {
      $('.hider').show();
      console.log(person);
      $('.dataholder1').append(person.login);
      $('.dataholder2').append(person.public_repos);
      $('.dataholder3').append(person.repos_url);
      $('.dataholder4').append(person.url);
    });
});
});

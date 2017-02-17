var apiKey = require('./../.env').apiKey;

Searching = function()
{};

Searching.prototype.getUser = function(userName){
  return $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey);
};

exports.searchModule = Searching;


// $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
//   var person = response;
//   callback(person);
// }).fail(function(error){
//   console.log(error.responseJSON.message);
// });

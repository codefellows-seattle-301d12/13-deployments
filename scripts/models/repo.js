(function(module) {
  var repos = {};

  repos.requestRepos = function(callback) {
    // TODO: refactor these requests into an $.ajax call
    $.when(
     $.get('/github/users/codefellows-seattle-301d12/repos')
     .done(function(data) {
       repos.allRepos = data;
     }),
     $.get('/github/users/iamrobinhood12345/followers')
     .done(function(data) {
       repos.followers = data;
     })
    ).done(callback);
  };

  repos.withTheAttribute = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
})(window);

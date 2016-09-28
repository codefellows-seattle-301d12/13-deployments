(function(module) {
  var repos = {};

  repos.requestRepos = function(callback) {
    // TODO: refactor these requests into an $.ajax call
    $.when(
     $.get('/github/users/codefellows-seattle-301d12')
     .done(function(data) {
       
     }),
     $.ajax({
       url: 'https://api.github.com/users/patci/followers' +
            '?per_page=5' +
            '&sort=updated',
       type: 'GET',
       headers: { 'Authorization': 'token ' + githubToken },
       success: function(data) {
         repos.followers = data;
       }
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

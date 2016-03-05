angular.module('meanstacktutorials').factory('DatabaseService', [
  '$q',
  '$http',
  function ($q, $http) {
    return({
      getUsers: getUsers,
      getUser: getUser
    });
    
    // Fetch users from Mongo user collection:
    function getUsers() {
        var deferred = $q.defer();
        var httpPromise = $http.get('/api/users');
 
        httpPromise.success(function (users) {
          deferred.resolve(users);
          // Now sort through the users:
          console.debug('users: ' + users);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
        return deferred.promise;      
    }
    
    // Given a username fetch a single user object (document) from Mongo user collection:
    function getUser(username) {
        var deferred = $q.defer();
        var httpPromise = $http.get('/api/findUser/'+username);
 
        httpPromise.success(function (user) {
          deferred.resolve(user);
          // Now sort through the users:
          console.debug('user: ' + user);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
        return deferred.promise;      
    }
  }
]);
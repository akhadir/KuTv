(function () {
  var myApp = angular.module('myApp',['ngRoute']);
  myApp.filter('timerSum', function() {
    return function(input) {
      var len = input.length,
          out = 0,
          i;
      for (i = 0; i < len; i++) {
        out += input[i].timer * 1000;
      }
      return out + 1000;
    };
  });
  
})();
var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($route){
    $route.when('/',{
        templateUrl:'../../application/view/changeCity.php',
        controller:'changeCity'
    })
    .when('/jump',{
        templateUrl:'../../application/view/jump.php',
        controller:'jump'
    })
    .otherwise({redirectTo:'/'})
}]);

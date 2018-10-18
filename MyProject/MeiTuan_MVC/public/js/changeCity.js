app.controller('changeCity', function ($scope, $http,$rootScope) {
    $scope.currentProvince = '省份';
    $scope.currentCity = '城市';
    $scope.clicked = true;
    $scope.key = '';
    $scope.show = false;
    $rootScope.getData('/?c=changeCity&m=getChina', 'data');
    $rootScope.getPosition();
    $scope.clickProvince = function (v) {
        $scope.currentProvince = v.province_name;
        $scope.currentCity = '城市';
        $scope.cities = v.province_cities;
        $scope.clicked = false;
    }
    $scope.clickCity = function (v) {
        $scope.currentCity = v;
        localStorage.setItem('position', $scope.currentProvince + " " + $scope.currentCity);
        location.hash ='/jump';

    }
    $scope.$watch('key', function (newVal, oldVal) {
        
        if (newVal != '') {
            $rootScope.getData('/?c=changeCity&m=searchCity', 'searchResult', {
                key: newVal
            });
            console.log($scope.searchResult);
            $scope.show = true;
        } else {
            $rootScope.searchResult = '';
            $scope.show = false;
        }

    })



});
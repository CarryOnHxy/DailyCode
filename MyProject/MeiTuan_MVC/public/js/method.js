app.controller('method', function ($scope, $rootScope,$http) {
    $rootScope.test = 'rootScope';
    $rootScope.getData = function(url, name, param) {
        $http({
            method: 'post',
            url: url,
            params: param,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function (d) {
            $rootScope[name] = d.data;
            console.log($rootScope[name]);
        })
    }
    $rootScope.getPosition = function () {
        if (!localStorage.getItem('position')) {
            $rootScope.position = '无选择城市';
            return;
        }
        $rootScope.position = localStorage.getItem('position');
    }
})
app.controller('jump',function($scope,$rootScope){
    if (!localStorage.getItem('position')) {
        $scope.position = '无选择城市';
        return;
    }
    $rootScope.getPosition();
})
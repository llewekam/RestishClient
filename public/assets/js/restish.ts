function RestishCtrl($scope, $http) {
    $http.get('//localhost:8080/').success(function(data) {
        $scope.page = data;
    });

}
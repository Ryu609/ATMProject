var LoginController = function ($scope, $routeParams, $location, LoginFactory) {
    $scope.loginForm = {
        cardNumber: '',
        pin: '',
        returnUrl: $routeParams.returnUrl,
        loginFailure: false
    };

    $scope.login = function () {
        var result = LoginFactory($scope.loginForm.cardNumber, $scope.loginForm.pin);
        //console.log(result)
        
        result.then(function (result) {
            console.log(result.success)

            if (result.success) {                
                    $location.path('/withdraw');                
            } else {
                $scope.loginForm.loginFailure = true;
            }
        });
    }
}

LoginController.$inject = ['$scope', '$routeParams', '$location', 'LoginFactory'];
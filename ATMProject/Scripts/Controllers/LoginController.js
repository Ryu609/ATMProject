var LoginController = function ($scope, $routeParams, $location, LoginFactory) {
    $scope.loginForm = {
        cardNumber: '',
        pin: '',
        returnUrl: $routeParams.returnUrl,
        loginFailure: false,
        loginFailAttempt: 0,
        retainCard:false
        
    };

    $scope.login = function () {
        var result = LoginFactory($scope.loginForm.cardNumber, $scope.loginForm.pin);       
        
        result.then(function (result) {   
            if (result.success) {                
                $location.path('/withdraw');                 
            }
            else {
                $scope.loginForm.loginFailAttempt = $scope.loginForm.loginFailAttempt + 1;
                if ($scope.loginForm.loginFailAttempt > 3) {
                    $scope.loginForm.retainCard = true;
                }
                $scope.loginForm.loginFailure = true;                                
            }
        });
    }
}

LoginController.$inject = ['$scope', '$routeParams', '$location', 'LoginFactory'];
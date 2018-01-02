var LoginController = function ($scope, $routeParams, $location, LoginFactory, RetainCardFactory) {
    $scope.loginForm = {
        cardNumber: '',
        pin: '',
        returnUrl: $routeParams.returnUrl,
        loginFailure: false,
        loginFailAttempt: 0,
        retainCard: false
        
    };

    $scope.login = function () {
        var result = LoginFactory($scope.loginForm.cardNumber, $scope.loginForm.pin);       
        
        result.then(function (result) {   
            if (result.success) {                
                $location.path('/Transaction');                 
            }
            else {
                $scope.loginForm.loginFailAttempt = $scope.loginForm.loginFailAttempt + 1;
               
                if ($scope.loginForm.loginFailAttempt > 3) {                   
                    var retainCardresult = RetainCardFactory($scope.loginForm.cardNumber);
                   
                    retainCardresult.then(function (retainCardresult) {                       
                        if (retainCardresult.success) {
                            $scope.loginForm.retainCard = true;
                        }
                    });
                }
                $scope.loginForm.loginFailure = true;                                
            }
        });
    }
}

LoginController.$inject = ['$scope', '$routeParams', '$location', 'LoginFactory', 'RetainCardFactory'];
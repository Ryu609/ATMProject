var LoginController = function ($scope, $window, $stateParams, $location, LoginFactory, RetainCardFactory) {
    console.log("controller Reached");
    $scope.loginForm = {
        cardNumber: '',
        pin: '',        
        loginFailure: false,
        loginFailAttempt: 0,
        retainCard: false
        
    };

    $scope.login = function () {
        $scope.submitted = true;
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
                            $window.location.href = "/Retain";
                        }
                    });
                }
                $scope.loginForm.loginFailure = true;                                
            }
        });
    }
}

LoginController.$inject = ['$scope','$window', '$stateParams', '$location', 'LoginFactory', 'RetainCardFactory'];
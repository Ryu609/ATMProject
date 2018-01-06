var LoginController = function ($scope,$state, $window, $stateParams, $location, LoginFactory, RetainCardFactory) {
        $scope.loginForm = {
        cardNumber: '',
        pin: '' 
         };
        $scope.handleError = {
            loginFailure: false,
            loginFailAttempt: 0,
            retainCard: false,
        }
        console.log($scope);
    $scope.login = function () {
        $scope.submitted = true;
       
        var result = LoginFactory($scope.loginForm.cardNumber, $scope.loginForm.pin);       
        
        result.then(function (result) {   
            if (result.success) {
                $state.transitionTo("stateThree");           
            }
            else {
                $scope.handleError.loginFailAttempt = $scope.handleError.loginFailAttempt + 1;
                console.log($scope);
                if ($scope.handleError.loginFailAttempt > 3) {                   
                    var retainCardresult = RetainCardFactory($scope.loginForm.cardNumber);
                   
                    retainCardresult.then(function (retainCardresult) {                       
                        if (retainCardresult.success) {
                            $scope.handleError.retainCard = true;
                            $state.transitionTo("stateSix");           
                        }
                    });
                }
                $scope.handleError.loginFailure = true;                                
            }
        });
    }  
}

LoginController.$inject = ['$scope', '$state','$window', '$stateParams', '$location', 'LoginFactory', 'RetainCardFactory'];
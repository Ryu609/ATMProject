var WithdrawController = function ($scope, $routeParams, $location, WithdrawFactory, AmountSelectionFactory) {
    
    
    $scope.accounts = [];

    $scope.GetAccountList = function () {
        var result = WithdrawFactory($scope.cardNumber);
        result.then(function (result) {            
            if (result.success) {
               
            }
            $scope.accounts = result.data;
        });  
    }

    $scope.WithdrawSelect = function (selectedAccount) {
        $location.path('SelectAmount/' + selectedAccount.AccountNumber);
    }    
}
WithdrawController.$inject = ['$scope', '$routeParams', '$location', 'WithdrawFactory', 'AmountSelectionFactory']
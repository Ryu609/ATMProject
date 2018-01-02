var WithdrawController = function ($scope, $routeParams, $location, WithdrawFactory, AmountSelectionFactory) {
    console.log("reached controller")
    
    $scope.accounts = [];

    $scope.GetAccountList = function () {
        console.log("reached GetAccountList");
        console.log($scope.cardNumber);
        var result = WithdrawFactory($scope.cardNumber);
        result.then(function (result) {
            console.log(result);
            if (result.success) {
                console.log(result.data);
            }
            $scope.accounts = result.data;
        });  
    }

    $scope.WithdrawSelect = function (selectedAccount) {
        console.log(selectedAccount.AccountNumber);
        $location.path('SelectAmount/' + selectedAccount.AccountNumber);
    }
}
WithdrawController.$inject = ['$scope', '$routeParams', '$location', 'WithdrawFactory', 'AmountSelectionFactory']
var WithdrawController = function ($scope, $window, $routeParams, $location, WithdrawFactory, AmountSelectionFactory, WithdrawAmountFactory) {
      
    $scope.accounts = [];

    $scope.GetAccountList = function () {
        var result = WithdrawFactory($scope.cardNumber);
        result.then(function (result) {            
            if (result.success) {
                $scope.accounts = result.data;
            }            
        });  
    }

    $scope.WithdrawSelect = function (selectedAccount) {
        $location.path('SelectAmount/' + selectedAccount.AccountNumber);
    }  

    $scope.Withdraw = function (item, account) {       
        var result = WithdrawAmountFactory(item, account);
        result.then(function (result) {
            if (result.success)
                $window.location.href = "/ThankYou";
            else
                $window.locaiton.href = "/WithdrawError";
        });
    }   
}
WithdrawController.$inject = ['$scope', '$window', '$routeParams', '$location', 'WithdrawFactory', 'AmountSelectionFactory', 'WithdrawAmountFactory'];
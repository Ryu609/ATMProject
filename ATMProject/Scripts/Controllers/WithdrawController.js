var WithdrawController = function ($scope, $state, $window, $stateParams, $location, AccountsFactory, WithdrawAmountFactory) {
      
    $scope.accounts = [];

    $scope.GetAccountList = function () {
        var result = AccountsFactory($scope.cardNumber);
        result.then(function (result) {            
            if (result.success) {
                //TODO
            } 
            $scope.accounts = result.data;
        });  
    }

    $scope.WithdrawSelect = function (selectedAccount) {
        console.log(selectedAccount);
        $location.path('SelectAmount/' + selectedAccount.AccountNumber);
    }  

    $scope.Withdraw = function (amount, account) {       
        var result = WithdrawAmountFactory(amount, account);
        result.then(function (result) {
            if (result.success)
                $state.transitionTo("stateFour");
            else
                $state.transitionTo("stateSeven");
        });
    }   
}
WithdrawController.$inject = ['$scope', '$state', '$window', '$stateParams', '$location', 'AccountsFactory', 'WithdrawAmountFactory'];
var WithdrawController = function ($scope, $state, $window, $stateParams, $location, AccountsFactory, WithdrawAmountFactory) {

    $scope.withdrawForm = {        
        amount: 0,
        selectedDenominator: []
    }
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

    $scope.withdraw = function (selectedAccount) {
        
        var result = WithdrawAmountFactory($scope.withdrawForm.amount, selectedAccount, $scope.withdrawForm.selectedDenominator);
        result.then(function (result) {
            if (result.success)
                $state.transitionTo("stateFour");
            else
                $state.transitionTo("stateSeven");
        });
    }


    $scope.setDenominators =  function (amount) {        

        $scope.denominators = [[{ "Unit": 1, "Currency": 500 }],[{ "Unit": 2, "Currency": 200 }, { "Unit": 1, "Currency": 100 }], [{ "Unit": 5, "Currency": 100 }], [{ "Unit": 1, "Currency": 300 }, { "Unit": 2, "Currency": 300 }, { "Unit": 1, "Currency": 1000 }]]
        
    };

   
};

WithdrawController.$inject = ['$scope', '$state', '$window', '$stateParams', '$location', 'AccountsFactory', 'WithdrawAmountFactory'];

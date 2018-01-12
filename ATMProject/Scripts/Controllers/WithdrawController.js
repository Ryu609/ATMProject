var WithdrawController = function ($scope, $state, $window, $stateParams, $location, AccountsFactory, WithdrawAmountFactory) {

    $scope.withdrawForm = {        
        inputamount: 0,
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


    $scope.setDenominators = function () {
        console.log($scope.withdrawForm);
        var currencies = [1000, 500, 200, 100, 50, 20, 10];        
        var myamount = $scope.withdrawForm.amount; 
        var mybigArray = [];
       
        for (var myindex = 0; myindex < currencies.length; myindex++)
        {
            
            var mysmallArray = [];
            if (myamount % currencies[myindex] == 0) {
                mybigArray.push([{ "Unit": myamount / currencies[myindex], "Currency": currencies[myindex] }]);
            }
            else {
                mybigArray.push(f(myamount, currencies.slice(myindex), mysmallArray))
            }
                    }

        $scope.denominators = mybigArray;        
    };
};

function f(amount, currencies, myarray) {
   
    for (var index = 0; index < currencies.length; index++) {

        if (amount >= currencies[index]) {
            myarray.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
        }
        if (amount % currencies[index] > 0)
           f(amount % currencies[index], currencies.slice(1), myarray);
        return myarray;
    }  
}

WithdrawController.$inject = ['$scope', '$state', '$window', '$stateParams', '$location', 'AccountsFactory', 'WithdrawAmountFactory'];

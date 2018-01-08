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


    $scope.setDenominators =  function () {        
        var currencies = [1000, 500, 200, 100, 50, 20];        
        var myamount = $scope.withdrawForm.amount; 
            $scope.denominators = f(myamount, currencies);        
    };
};

function f(amount, currencies) {
    var denominators = [];
    var myarray = [];
 
    for (var index = 0; index < currencies.length; index++) {
        
        if (amount % currencies[index] == 0)
        {
            denominators.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });    
        }
        else {
            var myresult = [];
            myresult.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
            myresult = f(amount % currencies[index], currencies.slice(index + 1));
            denominators.push(myresult);
            
        }
    }
    return denominators;

};


WithdrawController.$inject = ['$scope', '$state', '$window', '$stateParams', '$location', 'AccountsFactory', 'WithdrawAmountFactory'];

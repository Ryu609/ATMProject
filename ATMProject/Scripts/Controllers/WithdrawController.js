﻿var WithdrawController = function ($scope, $state, $window, $stateParams, $location, AccountsFactory, WithdrawAmountFactory) {

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
        var currencies = [1000, 500, 200, 100, 50, 20, 10];        
        var myamount = $scope.withdrawForm.amount; 
        
        $scope.denominators = $scope.denominators = [[{ "Unit": 1, "Currency": 500 }], [{ "Unit": 2, "Currency": 200 }, { "Unit": 1, "Currency": 100 }], [{ "Unit": 5, "Currency": 100 }], [{ "Unit": 1, "Currency": 300 }, { "Unit": 2, "Currency": 300 }, { "Unit": 1, "Currency": 1000 }]];        
    };
};


//version 3
//function f(amount, currencies) {
//    var bigArray = [];

//    for (var index = 0; index < currencies.length; index++) {
//        var myarray = [];

//        if (amount % currencies[index] == 0) {
//            myarray.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
//        }      
//        else 
        
//    }
//    return bigArray;

//}

//version 2
//function f(amount, currencies) {
//    var bigArray = [];

//    for (var index = 0; index < currencies.length; index++)
//    {
//        var smallArray = [];       

//        if (amount % currencies[index] == 0) {
//            smallArray.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
//        }

//        else {
//            if (amount >= currencies[index]) {
//                myArray.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
//            }
//                if (amount % currencies[index] > 10)
//                {
//                    myArray.push(f(amount % currencies[index], currencies.slice(1)));
//                }
        
           
//            smallArray.push(myArray);
//        }

//        bigArray.push(smallArray);
//    }    
//    return bigArray;

//}


//version 1
//function f(amount, currencies) {
//    var denominators = []; 
 
//    for (var index = 0; index < currencies.length; index++) {
//        if (amount >= currencies[index]) {
//            var myarray = [];
//            if (amount % currencies[index] == 0) {
//                myarray.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
//            }
//            else {
//                var myresult = [];
//                if (amount >= currencies[index]) {
//                    myresult.push({ "Unit": parseInt(amount / currencies[index]), "Currency": currencies[index] });
//                }
                
//                myarray.push(myresult);

//            }
//            denominators.push(myarray);
//        }
//    }
//    return denominators;

//};


WithdrawController.$inject = ['$scope', '$state', '$window', '$stateParams', '$location', 'AccountsFactory', 'WithdrawAmountFactory'];

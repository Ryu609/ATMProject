var WithdrawAmountFactory = function ($http, $q) {
    return function (amount, account, denominator) {
        console.log("amount" + amount);
        console.log("account" + account);
        console.log(denominator);
        var deferredObject = $q.defer();
        $http({ method: 'POST', url: '/Transaction/Withdraw', data: { Denominator: denominator, Account: account } })
            .then(function successCallback(response) {
                deferredObject.resolve({ success: true, amount: amount });
            }, function errorCallback(response) {
                deferredObject.resolve({ success: false });
            });
        return deferredObject.promise;  
    }
}

WithdrawAmountFactory.$inject = ['$http', '$q'];
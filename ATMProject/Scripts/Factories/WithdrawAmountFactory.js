var WithdrawAmountFactory = function ($http, $q) {
    return function (amount) {
        var deferredObject = $q.defer(); 
        $http({ method: 'POST', url: '/Transaction/Withdraw', data: { Amount: amount, Account: 'AJO01254' } })
            .then(function successCallback(response) {
                deferredObject.resolve(true);
            }, function errorCallback(response) {
                deferredObject.resolve({ success: false });
            });
        return deferredObject.promise;  
    }
}

WithdrawAmountFactory.$inject = ['$http', '$q'];
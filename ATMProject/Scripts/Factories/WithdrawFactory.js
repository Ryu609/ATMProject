var WithdrawFactory = function ($http, $q) {
    return function (cardNumber) {
        var deferredObject = $q.defer();   
        console.log("Reached WithdrawFactory");       
        console.log("Reached Factory")
        $http({ method: 'GET', url: '/Transaction/GetAccounts', data: { CardNumber: cardNumber } })
            .then(function successCallback(response) {
                deferredObject.resolve(response)
            }, function errorCallback(response) {
                deferredObject.resolve({ success: false });
            });
        return deferredObject.promise;        
    }
}

WithdrawFactory.$inject = ['$http', '$q'];
var AccountsFactory = function ($http, $q) {
    return function (cardNumber) {
        var deferredObject = $q.defer();           
        $http({ method: 'GET', url: '/Transaction/GetAccounts', data: { CardNumber: cardNumber } })
            .then(function successCallback(response) {
                deferredObject.resolve(response)
            });
        return deferredObject.promise;        
    }
}

AccountsFactory.$inject = ['$http', '$q'];
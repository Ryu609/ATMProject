var AmountSelectionFactory = function ($http, $q) {
    return function (account) {
        var deferredObject = $q.defer();

        $http({ method: 'GET', url: '/Transaction/SelectAmount/' + account})
            .then(function successCallback(response) {
                deferredObject.resolve(response)                
            }, function errorCallback(response) {
                deferredObject.resolve({ success: false });
            });
        return deferredObject.promise;  
    }

}
AmountSelectionFactory.$inject = ['$http', '$q'];